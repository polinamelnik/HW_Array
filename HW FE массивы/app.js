function findAndReplace(array, query, replacement) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === query) {
        array[i] = replacement;
      }
    }
  }
  
  window.onload = function() {
    let myArray = [7, 44, 86, 9, 33, 25, 15];
    console.log("sourse Array:", myArray);
  
    let userQuery = parseInt(prompt("Введите значение для поиска: "));
    let replacementValue = parseInt(prompt("Введите значение для замены: "));
  
    findAndReplace(myArray, userQuery, replacementValue);
  
    console.log("modified Array:", myArray);
  };
  
