
function formula(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



let array = [];

for(let i=1;i<=10;i++){
    array.push(formula(1, 100));
}
let array2 = array.slice();
array2.push(5);

console.log("lista1");
console.log(array);


console.log("lista2");
console.log(array2);

formula()
