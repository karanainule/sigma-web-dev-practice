let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = 
    "<b> yayy you were clicked </b> Enjoy your click!"
})


document.addEventListener("contextmenu",()=>{
    
    alert("right click placed")
})

document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
})