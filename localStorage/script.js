localStorage.setItem("Password","password@123")


try{

    var expr="%10*2+3"
    console.log(eval(expr));
}

catch{
    console.log("error");
}


console.log("file trans");
console.log("db trans");

// custom error
var age=17
if(age<23){
    throw new Error("invalid page")
}

else{
    console.log("pass");
}


