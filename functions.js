function addNumbers(n1,n2) {
    return n1*n2
}
console.log(addNumbers(2,3));

function cube(n) {
    return n**3
}
console.log(cube(3));

function smartsub(n1,n2) {
    return (n1>n2? n1-n2:n2-n1)
}
console.log(smartsub(3,8));
console.log(smartsub(8,3));

function negetiveOrPositive(num) {
    if(num>0){
        console.log(`${num} is positive`);
    }
    else if(num<0){
    console.log(`${num} is negative`);
    }
    else {
        console.log("number is zero");
    }
    
}
console.log(negetiveOrPositive(8));


