/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    ESERCIZIO 1    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

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

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//creo prompt tolowercase
let pariDispari = prompt("Scegli pari o dispari!").toLowerCase();

//check input pari/dispari con redirect
while (pariDispari !== "pari" && pariDispari !== "dispari"){
    alert ("puoi inserire solo ''pari'' o ''dispari''");
    pariDispari = prompt("Scegli pari o dispari!").toLowerCase();
}
console.log("Hai scelto " + pariDispari);
//creo input intero
let numeroScelto = parseInt(prompt("Inserisci un numero intero da 1 a 5"));
//check input da 1 a 5
while (numeroScelto >= 6 || numeroScelto <= 0){
    alert ("Puoi inserire solo numeri interi da 1 a 5");
    numeroScelto = parseInt(prompt("Inserisci un numero intero da 1 a 5"));
}
console.log("Hai inserito " + numeroScelto);

//creo funzione randomizzante limitata 
function randomizzatoreLimits(min, max) {
    let result = Math.random() * (max - min) + min;
    return Math.round(result);
  }

  let numeroSceltoCPU = randomizzatoreLimits(1,5);
  console.log("Il Computer ha scelto " + numeroSceltoCPU);

//sommo il numero generato dalla CPU e scelto dall' utente

let somma = (numeroSceltoCPU + numeroScelto);

//definisco la funzione per capire se il numero è pari o dispari
function isPariDispari(num){
    if (num%2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
}
//Lancio la somma dei numeri in pasto alla funzione
let risultatoFinale = isPariDispari(somma);
//comparo il return della funzione con la scelta forzata dell' utente "pari" o "dispari"
if (risultatoFinale == pariDispari){
    console.log("Complimenti hai vinto!");
}else{
    console.log("Purtroppo hai perso, aggiorna e riprova!");
}





