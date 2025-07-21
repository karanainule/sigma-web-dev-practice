let a = prompt("Enter frist number")
let b = prompt("Enter second number")

let sum = parseInt(a)+parseInt(b)
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
    
}

function main(){

     let x=1;
    try {
        console.log("the Sum is ",sum*x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
    
    finally{
        console.log("Files are are closed and db connection is being closed")

    }
}
    
let c = main()