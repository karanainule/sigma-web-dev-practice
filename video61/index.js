let name1 = "20karan 1000";
let name2 = "";
for (let i = 0; i < name1.length; i++) {
    
    if (!isNaN(name1[i]) && name1[i] !==" " )        {
        name2 += name1[i] ;
        
    }
    
}

// in the followinf code i did the reverse of that string 
console.log(name2)

let name3 = "";
for (let i = name2.length-1; i >=  0;  i--) {
    
    name3 += name2[i];
    
    
}

console.log(name3)






















// let random = Math.random()
// console.log(random)
// let a = prompt ("Enter first number");
// let c = prompt ("Enter operation");
// let b = prompt ("Enter second number");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }


// if (random > 0.1) {

//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

// }
// else {

//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }