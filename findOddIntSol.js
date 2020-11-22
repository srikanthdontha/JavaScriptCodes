function findOdd(numbers) {
    var count = 0;
    for(var i = 0; i<numbers.length; i++){
       for(var j = 0; j<numbers.length; j++){
        if(numbers[i] == numbers[j]){
          count++;
        }
      }
      if(count % 2 != 0 ){
        return numbers[i];
      }
    }
 };
  
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
  console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); //10

  //const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
