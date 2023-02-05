// Researched on mdn closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//2
function main(mainNumber){

    //3
    return function multiplied(){
        
        for(i=0; i<11; i++){
            console.log(`${mainNumber} * ${i} = ${mainNumber * i}`);
        }
    }
}

//4
let numberToMultiply = main(5);

//5
numberToMultiply();

/*
    Thinking
        1. This program takes a number, passes it into its inner function, looped over and multiplied by 10. Then output to the console.

        2. Our outer function is created named "main". It has one parameter called "mainNumber" which is the number the user passes in to be multiplied.

        3. A second function is returned called "multiplied". We take the values contained in "mainNumber", use a for loop to multiply it by the iteration number contained in "i". Our loop will stop once it is no longer less than 11. I've used 11 here as we need to mulitply up to 10.

        4. We call our "main" function, putting in the number as an argument we would like to mulitply, and store it inside a variable named "numberToMultiply". If we didn't store it inside this variable the inner function, "multiplied", in this case would not be run.

        5. Calling the function stored inside our "numberToMultiply" variable te execute our code.
*/

