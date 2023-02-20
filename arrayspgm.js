var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4},
]
csk_detail=point_table.find(t=>t.t_name=="csk")
console.log(csk_detail);


isPresent=point_table.some(t=>t.t_name=="csk")
console.log(isPresent);


isPresent=point_table.some(t=>t.t_name=="kb")
console.log(isPresent);

point_table.forEach(t=>console.log(t))