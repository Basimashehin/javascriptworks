var items=[
    {code:1,name:"potatoo",mrp:55,avlqty:50},
    {code:2,name:"tomatoo",mrp:75,avlqty:10},
    {code:3,name:"brinjal",mrp:35,avlqty:60},
    {code:4,name:"drumstick",mrp:75,avlqty:40},
    {code:5,name:"snakeguard",mrp:25,avlqty:50},
    {code:6,name:"carrot",mrp:90,avlqty:0}
]

var pname=items.map(p=>p.name)
console.log(pname);

var fp=items.filter(p=>p.mrp>50)
console.log(fp);

var stock=items.filter(p=>p.avlqty !=0)
console.log(stock);


var pricerange=items.filter(p=>p.mrp>30 &&  p.mrp<50)
console.log(pricerange);

items.sort((p1,p2)=>p2.mrp-p1.mrp)
console.log(items);

// costly product
var costly=items.reduce((p1,p2)=>p1.mrp>p2.mrp?p1:p2)
console.log(costly);

// use reduceRight if we want first Object


// costly products in stock

var ins=items.filter(p=>p.avlqty != 0).reduce((p1,p2)=>p1.mrp>p2.mrp?p1:p2)
console.log(ins);