/*
DB Schema

  {
    players: {

    },
    games: {
      [id]: { // A UUID to identify the game
        gameOwner: 'the id of the player that created the game',
        players: {
          [id]: { // For now generate a random id
            name: 'The name from their cookie',
            socketID: 'their socketID so we know how to contact
          }
        }
      }
    }
  }

  A Simple in Memory store. Later will become a dynamoDB instance.

*/

const db = {
  games: [],
};

module.exports = db;
