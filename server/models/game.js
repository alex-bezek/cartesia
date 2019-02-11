const uuidv1 = require('uuid/v1');

const MAX_PLAYER_COUNT = 8;

/*
  A model for structuring game data and providing read only access. Used
  to do calculations, and to get different filered views of the game.
*/
class Game {
  // Constructs a game object from the data passed in, or creates a new one
  // with defaults if json is empty.
  constructor(dbJSON) {
    this.data = dbJSON;
    this.data.id = dbJSON.id || uuidv1();
    this.data.players = dbJSON.players || [];
    this.data.gameOwner = dbJSON.gameOwner; // TODO: Enhance this to take a player object
  }

  // Public accessors for the data the consumers need
  get id() { return this.data.id; }

  get players() { return this.data.players; }

  get gameOwner() { return this.data.gameOwner; }

  get playerCount() { return Object.keys(this.players).length; }

  get isFull() {
    return !!this.playerCount() === MAX_PLAYER_COUNT;
  }

  // TODO: These views should probably be another class
  // Specific json serialization for the list view of all games available.
  toListView() {
    return {
      id: this.id,
      numPlayersInLobby: this.playerCount,
      maxLobbySize: MAX_PLAYER_COUNT,
      gameOwner: this.gameOwner,
    };
  }

  // Specific json serialization for the lobby view when you are part of a lobby
  toLobbyView() {
    return {
      id: this.id,
      players: this.players,
      maxLobbySize: MAX_PLAYER_COUNT,
      gameOwner: this.gameOwner,
    };
  }

  // Base serialization to convert it into the data stored in the db
  toDBJSON() {
    return {
      id: this.id,
      players: this.players,
      gameOwner: this.gameOwner,
    };
  }
}

module.exports = Game;
