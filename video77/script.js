function createcart( title, cNAME,views,monthsOld,duration,thumbbail) {
// finish this function
let viewstr
if(views<1000){
     viewstr = views 

}
else if(views>1000000){
     viewstr = views/1000000 + "M"
}
else {
    viewstr = views/1000 +"K"
}
let html = ` <div class="card">
        <div class="image"> <img
                src="${thumbbail}"
                alt="">
                <div class="capsule">${duration}</div></div>

        <div class="text">
            <h1>${title}</h1> 
            <p>${cNAME} . ${viewstr} views. ${monthsOld} month old</p>
        </div>

    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +  html
}

createcart("introduction to backend part 1","Codewithharry",560000,7,"31.22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")



