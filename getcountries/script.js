var countries=[
    {id:1,cname:"india",population:100000,currency:"Rs",language:"hindi"},
    {id:2,cname:"USA",population:200000,currency:"dollar",language:"english"},
    {id:3,cname:"UAE",population:300000,currency:"Dirhams",language:"arabic"},
    {id:4,cname:"qatar",population:90000,currency:"Riyal",language:"arabic"},
    {id:5,cname:"china",population:500000,currency:"yen",language:"chinese"}
]  
var htmldata=``
countries.forEach(cntry=>{
htmldata+=`
<tr>
<td>${cntry.id}</td>
<td>${cntry.cname}</td>
<td>${cntry.population}</td>
<td>${cntry.currency}</td>
<td>${cntry.language}</td>
<td>
<button onClick=displayDetails(${cntry.id})>View</button>
</td>
</tr>
`
})
document.querySelector("#result").innerHTML=htmldata

function displayDetails(id){
    let details=countries.find(cnt=>cnt.id==id);
    populateValue(details);
}
function populateValue(country){
    let displaydata=`
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${country.cname}</li>
      <li class="list-group-item">${country.population}</li>
      <li class="list-group-item">${country.currency}</li>
      <li class="list-group-item">${country.language}</li>
    </ul>
  </div>
   `
   document.querySelector("#id_details").innerHTML=displaydata
}