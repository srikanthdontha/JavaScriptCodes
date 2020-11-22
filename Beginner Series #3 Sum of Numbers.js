function getSum( a,b )
{
if (a==b) return a;
else if(a!==b){
 sum = 0;
 for (i=a;i<=b;i++)
 sum += i;
 return sum
}
}
console.log(getSum(1,8));