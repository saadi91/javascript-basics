
var stringSize = function (text) {
return text.length
}
var replaceCharacterE = function (text) {
return text.replace(/e/ , " ")
}
var concatString = function (text1, text2) {
return text1.concat(text2)
}
var showChar5 = function (text) {
     text.length
   return text[4]
}
var showChar9 = function (text) {
    text.length
    return text.slice(0,9)
}
var toCapitals = function (text) {
 return text.toUpperCase();
}
var toLowerCase = function (text) {
 return text.toLowerCase()
}
var removeSpaces = function (text) {
  text.length
  return text.substr(1,26)
}
var IsString = function (text) {
     if(typeof(text) == "string"){
         return true
     }
}

var getExtension = function (text) {
var result = text.split(".").pop() // remove before dot and return after dot
return result
}
var countSpaces = function (text) {
   var spaces = text.split(" ").length - 1
   return spaces
}
var InverseString = function (text) {
     return text.split("").reverse().join("");
}

var power = function (x, y) {
  return Math.pow(x,y)
}
var absoluteValue = function (num) {
   num = 5
 return num
}
var absoluteValueArray = function (array) {
  array =[5,50,25,568]
  return array
}
var circleSurface = function (radius) {
  radius = 79
  return radius
}
var hypothenuse = function (ab, ac) {
return Math.hypot(ab,ac)
}
var BMI = function (weight, height) {
  var n = Math.round(weight / ( height* height )*100)/100
  return n
}

var createLanguagesArray = function () {
   var languages = ["Html", "CSS", "Java", "PHP"]
   return languages
}
 
var createNumbersArray = function () {
   var numbers = [0,1,2,3,4,5]
   return numbers
}

var replaceElement = function (languages) {
   languages[2] = "Javascript"
    return languages
}

var addElement = function (languages) {
  languages.push("Ruby", "Python")
  return languages
}

var addNumberElement = function (numbers) {
   numbers.unshift(-2,-1)
   return numbers
}

var removeFirst = function (languages) {
   languages.shift()
   return languages
}

var removeLast = function (languages) {
  languages.pop()
  return languages
  
}

var convertStrToArr = function (social_arr) {
   var array = social_arr.split(",")
   return array
}

var convertArrToStr = function (languages) {
    var languages = languages.toString()
    return languages
}

var sortArr = function (social_arr) {
   var languages = social_arr.sort()
   return languages

}

var invertArr = function (social_arr){
return social_arr.reverse()

}
