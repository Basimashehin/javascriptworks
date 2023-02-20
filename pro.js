var lottery=new Promise((res,rej)=>{
    let priceNum=Math.floor(Math.random()*10)
    let candidateNum=7
    if(priceNum==candidateNum){
        res("won")
    }
})

lottery.then(ms=>console.log("will buy a hunter"))