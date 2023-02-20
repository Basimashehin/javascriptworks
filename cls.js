setTimeout(()=>{
    console.log("line 1");}
    ,2000)
setTimeout(()=>{console.log("line 1.1");},0)
console.log("line 2");
setTimeout(()=>{console.log("line 3");},1000)
console.log("line 4");