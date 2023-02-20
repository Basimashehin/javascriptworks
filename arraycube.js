var arr=[10,2,3,14,6,7,8]


var cube=arr.map(n=>n**3)
console.log(cube);


var fun=arr.map(n=> n>5? n+1:n-1)
console.log(fun);

var even=arr.filter(n=>n%2==0)
console.log(even);
var odd=arr.filter(n=>n%2 != 0)
console.log(odd);

var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);


var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);