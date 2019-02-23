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

  Note: Its a bit annoying that since this is in memory, and we reload the server code
  on change, that the db data is lost. If this becomes super annoying, we could very
  easily wrap this in a proxy that on GET pulls data from a file on disk, and on SET
  it writes to the file

*/

const db = {
  games: [],
};

module.exports = db;
