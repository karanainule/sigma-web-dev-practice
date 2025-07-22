// async function sleep(){
//     return new  Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(45)
//         }, 2000)

//     });

// }

function sum(a,b,c){
    return a+b+c
}
let z = 10;
( async function main(){
    // let a = await sleep()
    // console.log(a)

    // let b = await sleep()
    // console.log(b)
    
    let obj ={
        a:11,
        b:22,
        c:3
    }
    let {a,b} = obj
    console.log(a,b)

    let arr = [1, 4, 6]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
    
    z =z+19;
    console.log(z)

})()
console.log("after function",z)