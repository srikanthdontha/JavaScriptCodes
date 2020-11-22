//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

function arrayToInt (arr) {
    return Number.parseInt(arr.join(""), 2);
  }
  num = arrayToInt([1,1,0])
  console.log(num)
