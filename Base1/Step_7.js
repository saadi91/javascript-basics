console.log("hello");


var shoe = document.getElementById("shoe_size");
var year = document.getElementById("year");
var validate = document.getElementById("validate");

var calc = function(){
var result = ((((shoe.value * 2)+5)*50)-year.value)+ 1766;

alert(result);
}

validate.addEventListener("click", calc);
