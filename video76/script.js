async function getdata() {
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(455)
    },2500);
})
}

async function main(){
    console.log("loding modules")
    console.log("do something else")
    console.log("load data")

    let data = await getdata()
    console.log("ok")

}
main()