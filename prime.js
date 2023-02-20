var n=12
var flag=0

for (let i=2;i<n;i++)
{
    if(n%i==0){ 
        flag=1;
        break
    }
}
if(flag==0){
    console.log("the number is prime");
}
else{
    console.log("the number is not prime");

}