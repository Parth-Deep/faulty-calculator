let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter operation(*,+,-,/) number");
let c = prompt("Enter second number");
let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}

if (random>0.1){
    //Perfect calculation
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

}
else{
    //wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)}