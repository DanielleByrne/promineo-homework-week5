// employee (name and title), company (name and [employees], )
// game (name and rating) game type(name and [games] menu (create,view, delete, display))

class Game {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
  gameDetails() {
    return `${this.game} has a rating of ${this.rating}`;
  }
}

class GameType {
  constructor(type) {
    this.type = type;
    this.games = [];
  }
  addGame(game) {
    if (game instanceof Game) {
      this.games.push(game);
    } else {
      throw new Error(
        `you can only add games that are an instance of Game. Argument is not a Game: ${game}`
      );
    }
  }

  describeGame() {
    return `Category ${type} has ${this.games.length} games in it`;
  }
}

class Options {
  constructor() {
    this.teams = [];
    this.selectedGame = null;
  }
  start() {
    let selection = this.showOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createCategory();
          break;
        case "2":
          this.viewCategory();
          break;
        case "3":
          this.deleteCategory();
          break;
        default:
          selection = 0;
      }
      selection = this.showOptions();
    }
  }
}
