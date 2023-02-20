var text="hello hai hello hai"
var arr=text.split(" ")
console.log(arr);
var out={}
for(let word of arr){
    if (word in out)
    {
        out[word]+=1

    }
    else{
        out[word]=1
    }
}   
console.log(out);