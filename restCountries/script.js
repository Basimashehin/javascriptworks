fetch(`https://restcountries.com/v2/all`).then(res=>res.json()).then(data=>populateValues(data))



function populateValues(countries) {

    console.log(countries.cname);
    let selectbox=document.querySelector("#id_countryselect")
    countries.forEach(cntry=> {
    
        let cname=cntry.name
        let option=document.createElement("option")
        option.text=cname
        option.value=cname
        selectbox.append(option)
        
    });
}


function fetchCountry(){
    let cname=document.querySelector("#id_countryselect").value
    fetch(`https://restcountries.com/v2/name/${cname}?fullText=true`).then(res=>res.json()).then(data=>populatecountry(data)).catch(err=>alert(err))

}


function populatecountry(country) {
    let data=country[0]

    let htmldata=`
    <div class="card" style="width: 18rem;">
  <img src="${data.flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    `
    document.querySelector("#result").innerHTML=htmldata
}