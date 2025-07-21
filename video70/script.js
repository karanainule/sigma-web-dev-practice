alert("Hello World")

const colours = {
    c1 : "red",
    c2 : "blue",
    c3 : "violet",
    c4 : "yellow",
    c5 : "green",
    c6 : "black",
    c7 : "purple",
    c8 : "orange"
}

function random(){
    let arr = document.getElementsByClassName("box")
    for(let i = 0; i < 5; i++)
    {
        arr[i].style.backgroundColor = colours[`c${Math.floor(Math.random() * 8) + 1}`]
    }
}
setInterval(random,1000)