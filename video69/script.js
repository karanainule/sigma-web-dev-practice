
console.log("hello")

let a = 2

function fact (number) {
  let arr =  Array.from(Array(number+1).keys())
//   console.log(arr)
    
    
   let c = arr.slice(1,).reduce((a,b) => a*b)
    return c;
}

function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        const element = number;
        fac = fac*index;
    }
    return fac;
}



console.log(facfor(a))
console.log(fact(a))