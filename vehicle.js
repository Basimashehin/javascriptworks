var baleno={
    name:"baleno",
    brand:"nexa",
    colours:["red","white","grey"],
    price:"8lac",
    breaks:"abs",
    transmission:"manuel",
    getPrice(){
        return this.price
    }
}


var glanza={
    name:"glanza",
    brand:"toyota",
    price:"10lac"
}

glanza.__proto__=baleno

console.log(glanza.colours);
console.log(glanza.getPrice());