'use strict';

function getBoards(collection) {
  let boards = [];
  for (var b in collection) {
    let modules = [];
    let board = collection[b];
    if (!board.icon) {
      board.icon = 'fa-user-circle-o';
    }
    for (var m in board.modules) {
      modules.push({
        name : m,
        pos : board.modules[m]
      });
    }
    boards.push({ 
      name : b,
      icon : board.icon,
      modules : modules
    });
  }
  return boards;
}

class BoardManager {
  getBoards(name) {
    //console.log(name);
    const boardsConfig = require('./boards.config.json');
    const collection = boardsConfig[name] || boardsConfig["default"];
    const boards = getBoards(collection);
    //console.log(boards);
    return boards;
  }
}

module.exports = BoardManager;
