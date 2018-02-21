var firstNumber = document.getElementById("first_number");
var secondNumber = document.getElementById("second_number");
var validate = document.getElementById("validate");

var divide = function(){
    var total = firstNumber.value % secondNumber.value;
    alert(total);
}
validate.addEventListener("click", divide);
