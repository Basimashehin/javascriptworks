var score=[102,34,56,45,67,34];

// for (let i = 0; i < 6; i++) {
//     console.log(score[i]);
    
// }

// for(let s in score){
//     console.log(s);
// }

// for(let s of score){
//     console.log(s);
// }


score.sort()
console.log(score);

// (o1,o2)=>o1<o2?-1:1

// score.sort((o1,o2)=>o1<o2?-1:1)
// console.log(score);

// score.sort((o1,o2)=>o1>o2?-1:1)
// console.log(score);

score.sort((n1,n2)=>n1-n2)
console.log(score);

score.sort((n1,n2)=>n2-n1)
console.log(score);
score.push(1000)
console.log(score);
score.pop()
console.log(score);