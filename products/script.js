// var request=new XMLHttpRequest()
// request.open("get","https://fakestoreapi.com/products")
// request.send()
// request.onreadystatechange=()=>{
//     if(request.readyState==4){
//         if(request.status>199 && request.status<300){
//             let data=JSON.parse(request.responseText)
//             console.log(data);

//         }
//     }
// }


fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>populateValues(data))

function populateValues(products) {
    let htmldata=``;
    products.forEach(p=>{

        htmldata+=`
        <div class="col-3">
        <div class="card" style="width: 18rem;">
  <img src="${p.image}" class="card-img-top" al  t="..." width="100%">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.description}</p></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <button class="btn btn-info" onClick=fetchProduct(${p.id}) >View</button>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> 
</div>`
    });
    document.querySelector("#result").innerHTML=htmldata
} 


function fetchProduct(id){
  fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json()).then(data=>populateValues([data]))
}


function fetchByCategory(e){
  let category=e.target.name;
  fetch(`https://fakestoreapi.com/products/category/${category}`).then(res=>res.json()).then(data=>populateValues(data))
}