// let main = document.getElementsByClassName("main")
// main[0].style.backgroundColor="aqua"

// let text = document.getElementById("text").style.backgroundColor="red"  

// let a=3

// function factorial(number){
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr) //0,1,2,3
//     let c = arr.slice(1,).reduce((a,b)=>a*b)
//     console.log(c)

// }
// factorial(a)

// let b=3
// var d=1
// for (let i = 1; i <=b; i++) {
//      d=i*d
// }
// console.log(d)

// let div = document.createElement("div");
// div.innerHTML= "hey is am inserted"
// div.setAttribute("class","selected")
// document.querySelector(".main").prepend(div);



function checkprime() {

    let n = prompt("enter Number")
    if (n < 0) {
        console.error("enter number greater than 0");


    }
    if (n == 1 || n == 0) {
        return console.log("not prime")
    }
    for (let i = 2; i < n; i++) {



        if (n % i == 0) {
            return console.log("not prime")


        }
        
        else 
        {
            return console.log("prime")
        }

    }
}
checkprime()