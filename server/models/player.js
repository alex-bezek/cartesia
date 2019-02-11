/*
  A simple model for structuring player data.
*/
class Player {
  constructor(json) {
    if (!json.id || !json.username || !json.socketID) {
      throw new Error(`The json ${json} is missing a required parameter`);
    }
    this.id = json.id;
    this.username = json.username;
    this.socketID = json.socketID;
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      socketID: this.socketID,
    };
  }
}

module.exports = Player;
