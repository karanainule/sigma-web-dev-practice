/*
Create faulty calculater
1. it takes two number asinput from the user
2.it perform wrong operation as follows

+ ---> -
* ---> +
- ---> /
/ ---> **

it perforem wrong operation 10% of the time

*/



function cal (a,b) {
    if ( Math.random() < 0.1) {
        console.log("addition is",(a-b) );
        console.log("multiplation is",(a+b) );
        console.log("minus is",(a/b) );
        console.log("divide is",(a**b) );
        
    }
    else{

        console.log("addition is",(a+b) );
        console.log("multiplation is",(a*b) );
        console.log("minus is",(a-b) );
        console.log("divide is",(a/b) );
    }
    
}
cal(2,3);
