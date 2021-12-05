
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
  constructor(name) {
    this.name = name;
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
    this.games = [];
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

    alert("Bye!");
  }
  showOptions() {
    return prompt(`
     0) exit
     1) create a category
     2) view a category
     3) delete a category
     `);
  }

  showGameOptions(gameInfo) {
    return prompt(
      `0) back
           1) create game
           2) delete game
           ---------------
           ${gameInfo}`
    );
  }

  createCategory() {
    let name = prompt("Enter name for new game:");
    this.games.push(new GameType(name));
  }

  viewCategory() {
    let index = prompt("Enter index of Category you want to view");
    if (index > -1 && index < this.games.length) {
      this.selectedGame = this.games[index];
      let description = `Category Name: ${this.selectedGame.name}`;
      for (let i = 0; i < this.selectedGame.games.length; i++) {
        description +=
          i +
          `) ${this.selectedGame.games[i].name} - ${this.selectedGame.games[i].rating}`;
      }
      let selection = this.showGameOptions(description);
      switch (selection) {
        case "1":
          this.createGame();
          break;
        case "2":
          this.deleteGame();
      }
    }
  }
  deleteCategory(){
      let index=  prompt("Enter the index of the game you want to delete")
      if (index > -1 && index < this.games.length){
          this.games.splice(index, 1)
      }
  }


  createGame() {
    let name = prompt("Enter name for new game");
    let rating = prompt("Enter rating for new game");
    this.selectedGame.games.push(new Game(name, rating));
  }

  deleteGame() {
    let index = prompt("Enter index of the game you want to delete: ");
    if (index > -1 && index < this.selectedGame.games.length) {
      this.selectedGame.games.splice(index, 1);
    }
  }
}

let options = new Options();
options.start();
