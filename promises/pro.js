var lottery= new Promise((res,rej)=>{
    let priceNum=Math.floor(Math.random()*10)
    let candidateNum=7
    if(priceNum==candidateNum){
        res("won")
    }
})

lottery.then(ms=>console.log("will buy a hunter"))



// using catch
var pro= new Promise((res,rej)=>{
    let num=3
    if(num<10){
        rej("invalid")
    }
})


pro.then(res=>console.log("valid number")).catch(err=>console.log(err))


//TypeScript