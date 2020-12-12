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
    title: 'My todo:',
      firstask: ' - Buy milk',
      secondtask: ' - Download games',
      game: ' - Diablo',
  };
  console.log(toDoList.title)
  console.log(toDoList.firstask);
  console.log(toDoList.secondtask);
  console.log('    ' + toDoList.game);