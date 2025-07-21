// console.log("Karan is hacker")
// console.log("Harry is hacker")

// setTimeout(() => {
//     console.log("I am inside settimeout ")
// },2000);

// console.log("the end")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("karan",fn)
    document.head.append(sc)


}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)