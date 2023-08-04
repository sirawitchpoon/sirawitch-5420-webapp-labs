function readInput() {
    let list = [];
    while (true) {
      let input = prompt("Enter a positive integer:");
      let num = parseInt(input);
      if (isNaN(num)) {
        continue;
      } else if (num < 0) {
        return list;
      } else {
        list.push(num);
      }
    }
  }
  
  function displayStats(list) {
    let sum = 0;
    list.forEach(function(list) {
      sum += list;
    });
    let avg = list.length > 0 ? sum / list.length : 0;
    let formattedAvg = avg.toFixed(2);
    let min = list.length > 0 ? Math.min(...list) : 0;
    let max = list.length > 0 ? Math.max(...list) : 0;
    alert("For the list " + list + " the average is " 
    + formattedAvg + ", the mininum is " + min + ", and the maximum is " + max)
  }

list = readInput();
displayStats(list);