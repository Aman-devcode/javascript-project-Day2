function getValues(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

return [Number(num1), Number(num2)];
}

function add(){
let [a,b] = getValues();
document.getElementById("result").innerText = "Result: " + (a + b);
}

function sub(){
let [a,b] = getValues();
document.getElementById("result").innerText = "Result: " + (a - b);
}

function mul(){
let [a,b] = getValues();
document.getElementById("result").innerText = "Result: " + (a * b);
}

function div(){
let [a,b] = getValues();
document.getElementById("result").innerText = "Result: " + (a / b);
}