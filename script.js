slowMath.add(6,2).then((response) => {
    console.log("6 + 2 = " + response);
    slowMath.multiply(response,2).then((response) => {
        console.log("8 * 2 = " + response);
        slowMath.divide(response,4).then((response) => {
            console.log("16 / 4 = " + response);
            slowMath.subtract(response,3).then((response) => {
                console.log("4 - 3 = " + response);
                slowMath.add(response,98).then((response) => {
                    console.log("1 + 98 = " + response);
                    slowMath.remainder(response,2).then((response) => {
                        console.log("remainder of 99 / 2 = " + response);
                        slowMath.multiply(response,50).then((response) => {
                            console.log("1 * 50 = " + response);
                            slowMath.remainder(response,40).then((response) => {
                                console.log("remainder of 50 / 40 = " + response);
                                slowMath.add(response,32).then((response) => {
                                    console.log("The Final Result is " + response);
                                }).catch(err => console.log(err));
                            }).catch(err => console.log(err));
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}).catch(err => console.log(err));


async function doMath(){
    try {
    let response = await slowMath.add(6,2);
    console.log("6 + 2 = " + response);
    response = await slowMath.multiply(response,2);
    console.log("8 * 2 = " + response);
    response = await slowMath.divide(response,4);
    console.log("16 / 4 = " + response);
    response = await slowMath.subtract(response,3);
    console.log("4 - 3 = " + response);
    response = await slowMath.add(response,98);
    console.log("1 + 98 = " + response);
    response = await slowMath.remainder(response,2);
    console.log("remainder of 99 / 2 = " + response);
    response = await slowMath.multiply(response,50);
    console.log("1 * 50 = " + response);
    response = await slowMath.remainder(response,40);
    console.log("remainder of 50 / 40 = " + response);
    response = await slowMath.add(response,32);
    console.log("The Final Result is " + response);
    } catch(error){
        console.log(error);
    }
    
}

doMath();