// Promise Async Await


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
};

async function add(x) {
    console.log("Working.....")
    setTimeout(() => {
        console.log("Still working...")
    }, 2000)
    let a = await resolveAfter2Seconds(20);
    let b = await resolveAfter2Seconds(30);
    return x + a + b;
};


add(10).then(v => {
    console.log(v) // prints 60 after 4 seconds.
})



// ------------------------------------------------

// Example 1


// function resolveAfter2Seconds(x) {
//     setTimeout(() => {
//         console.log("Working...")
//     }, 2000);
//     return x;
// };


// Example 2

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// };

// resolveAfter2Seconds(22).then((v) => {
//     console.log(v)
// })




// Example 3: Try Catch


// function resolveAfter2Seconds(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (x > 10) {
//                 resolve(x);
//             }
//             else {
//                 reject("Error, x is to small!")
//             }
            
//         }, 2000);
//     });
// };

// async function add(x) {
//     console.log("Working.....")
//     setTimeout(() => {
//         console.log("Still working...")
//     }, 2000)
//     try {
//         let a = await resolveAfter2Seconds(2);
//         let b = await resolveAfter2Seconds(30);
//         return x + a + b;
//     } catch(err) {
//         return err;
//     }
// };


// add(10).then(v => {
//     console.log(v) // prints 60 after 4 seconds.
// })