console.log("Hello world!");

/*exemplo: */
function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        /*se é par, coloca ele na lista*/
        if(array[i] % 2 === 0){ 
            evenNums.push(array[i]);
        } else{ /*se não, vou dizer que não é par*/
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são: ', evenNums)
} 

let array = [1, 2, 3, 4, 5, 7, 8];

returnEvenValues(array);