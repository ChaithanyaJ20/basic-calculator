const display = document.getElementById("display");
const invalidValues = ["Error", "undefined", "NaN", "Infinity"];


function appendToDisplay(input) {
  if (invalidValues.includes(display.value)) {
    display.value = input;
  }
  else if (display.value == "0" && input != "0") {
    display.value = input;
  }
  else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value="0";
}
function deleteLast() {
  if (invalidValues.includes(display.value)){
     display.value = "";
  }
  else if (display.value.length === 1) {
    display.value = "0";
  }
  else{
  display.value = display.value.slice(0, -1);
  }
}
function calculate(){
  try{
    let input = display.value.replace(/\b0+(\d)/g, '$1'); //octal ERROR
    display.value =eval(input); 
  }
  catch(err){
    display.value = "Error";
  }
}
function square() {
  try {
    let value = parseFloat(display.value); 
    display.value = value * value;         
  } catch (err) {
    display.value = "Error";
  }
}
