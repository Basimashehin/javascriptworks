var students=[
    {id:1,name:"raj",grade:"B",percentage:80,language:"hindi"},
    {id:2,name:"rahul",grade:"C",percentage:65,language:"english"},
    {id:3,name:"ram",grade:"C",percentage:70,language:"hindi"},
    {id:4,name:"remya",grade:"B",percentage:75,language:"malayalam"},
    {id:5,name:"rajesh",grade:"A",percentage:90,language:"english"}
]
var htmldata=``
students.forEach(std=>{
htmldata+=`
<tr>
<td>${std.id}</td>
<td>${std.name}</td>
<td>${std.grade}</td>
<td>${std.percentage}</td>
<td>${std.language}</td>
</tr>
`
})

document.querySelector("#result").innerHTML=htmldata