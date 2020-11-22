function persistence(num) {
    var digits = (""+num).split("");
    var sum = digits.reduce(function(a, b){
        for(sum ==0 ;sum.value< num.value; sum++)
            if( sum < 10 )
            return digits;
            else
            return a * b;
    });
    console.log(sum); 
}
persistence(97)

