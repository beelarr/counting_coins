/**
 * Created by beelarr on 7/14/17.
 */
/*
 Input: 0.67
 Output:
 {
 quarters: 2,
 dimes: 1,
 nickels: 1,
 pennies: 2
 }

 */

let coinPurse = {};
let quarter = 25;
let dime = 10;
let nickle = 5;
let penny = 1;
let remainder;
let remainder_after_dime;
let remainder_after_nickle;

function coinCounter (dollar_amount_in_cents) {
    // Initialize a JavaScript object to hold the coins


    if (dollar_amount_in_cents % quarter === 0) {
        coinPurse.quarters = dollar_amount_in_cents / quarter;
    }
        if (dollar_amount_in_cents % quarter !== 0) {
            coinPurse.quarters = Math.floor(dollar_amount_in_cents / quarter);
            console.log(coinPurse.quarters);
            remainder = dollar_amount_in_cents % quarter;
            console.log(remainder);
        }
            if (remainder % dime === 0) {
                console.log(remainder);
                coinPurse.dimes = remainder / dime;
                console.log(coinPurse.dimes)
            }
                if (remainder % dime !== 0) {
                    coinPurse.dimes = Math.floor(remainder / dime);
                    console.log(coinPurse.dimes);
                    remainder_after_dime = remainder % dime;
                    console.log(remainder_after_dime);
                    console.log(coinPurse)
                }
                    if (remainder_after_dime % nickle === 0) {
                        coinPurse.nickles = remainder_after_dime / nickle;
                        console.log(coinPurse)
                    }
                        if (remainder_after_dime % nickle !== 0) {
                            coinPurse.nickles = Math.floor(remainder_after_dime / nickle);
                            coinPurse.pennies = remainder_after_dime % nickle;
                            console.log(coinPurse)
                        }






}

coinCounter(192);


//     } else {
//         coinPurse.quarters = dollar_amount_in_cents / quarter;
//         let remainder =  dollar_amount_in_cents % quarter;
//     }
//
//     if (dollar_amount_in_cents % dime === 0){
//         coinPurse.dimes = remainder / dime;
//         console.log(coinPurse)
//
//     }
//
// }





//
//
//     coinPurse.quarters = 0;
//
//     return coinPurse;
// }
//
// var coins = coinCounter()
// console.log();