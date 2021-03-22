'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let toDoList = {
    title: 'My todo:\n',                        // \n = Enter -> mondat végén; \t = Tab -> mondat elején
      firstask: ' - Buy milk\n',
      secondtask: ' - Download games\n',
      game: ' \t- Diablo',
  };
  console.log(toDoList.title, toDoList.firstask, toDoList.secondtask, toDoList.game)
  
