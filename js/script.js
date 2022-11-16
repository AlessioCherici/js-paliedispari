/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
*/

/*creo input e lo converto in lowercase*/
let inputParola = prompt("Inserisci qui la tua parola!");

let parolaLowerCase = inputParola.toLowerCase();
/*inserisco la parola in un array*/
let arrayParola = parolaLowerCase.split("");
/*definisco la funzione per capire se la stringa e' paliondroma*/
function palindrome(array){

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }   
    }
 return true;
}

/*richiamo la funzione per analizzare l'array*/
let isPalindromo = palindrome(arrayParola);

/*printo in console la soluzione*/
if (isPalindromo == true){
    console.log("La stringa "+inputParola+" e' palindroma ");
}else{
    console.log("La stringa "+inputParola+" non e' palindroma ");
}


/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    ESERCIZIO 2    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/






