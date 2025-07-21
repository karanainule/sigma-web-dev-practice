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



age = prompt("enter age")

if (age < 18) {
    alert("you can not enter to site !")

}
else {
    alert("you can  enter to site !")
    document.body.style.background = "blue";
    // window.location.href = "https://www.google.com/"; 
    // it redirect to the new page

}