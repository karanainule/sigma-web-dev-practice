console.log("hello")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "red"

document.getElementById("redbox").style.backgroundColor = "red"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
}) 