console.log('This is promise');


let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("rejected")

    }
    else {
        setTimeout(() => {
            console.log("yes i am done ");
            resolve("Karan")

        }, 100);
    }
})

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);f

})