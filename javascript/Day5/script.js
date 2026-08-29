//DAY 5 OF JS 
//----LOOPS AND CONTROL FLOW OF THE PROGRAM--------

//Loops allow you to execute a piece of code multiple times without rewriting it. This is called iteration. Instead
// of writing the same code 10, 100, or 1000 times, you can use a loop to repeat it automatically.

//example1: print numbers from 1-5

// for(let i =1; i<=5; i++){
//     console.log(i)
// }

//Example2: print numbers fron 1-15

// for(let i=1; i<=15; i+=2){

//     console.log(i)
// }


//example3: print even numbers from 2-10

// for (let i=2; i<=10; i+=2){
//     console.log(i)
// }

//example4: multiples of 5 
// for(let i=5; i<=50; i+=5){
//     console.log(i)
// } 

//example5: print multiplication table of 5
// for(let i=1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`)
// }

//example6:countdown from 10-1
// for(let i=10; i>=1; i--){
//     console.log(i)
// }


//-----NESTED FOR LOOPS-----

//example1:
// for(let i=1; i<=3; i++){
//     for(j=1; j<=5; j++){
//             console.log(i)
//     }
// }


//example2:

// for(let i=0; i<=5; i++){
//     console.log("")
//     for(let j=0; j<=i; j++){
//         console.log("*")
//     }
// }


//example3: multipliction table 1 to 5
// for (let i = 1; i <= 5; i++) {
// let row = "";
// for (let j = 1; j <= 5; j++) {
// row += (i * j) + "\t";
// }
// console.log(row);
// }


//example4: grid of numbers
// for(let row=1; row<=4; row++){
//     let line =""
//         for(let col=1; col<=4; col++){
//             line += `(${row}, ${col})`
//         }

//         console.log(line)
// }


//example6:inevrted tirangle pattern
// for(let i=0; i<5; i++){
//     let row=""
//     for(let j=5; j>i; j--){
//         row+=" *"
//     }
//     console.log(row)
// }

// example7: 
for(let i= 0; i<=5; i++){
   let row=""
    let rowSpace=""
    for(let k=0;k<=5-i;k++ ){
        rowSpace+=" "
    }


        for(let j=0;j<2*i-1;j++){
            row+="*"
        }
        console.log(rowSpace+row)
    }