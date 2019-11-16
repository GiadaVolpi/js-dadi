//Generare un numero casuale tra 1 e 6.
//Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
//Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).


alert ("Sfida a dadi il tuo pc! Lancia il tuo dado cliccando su ok")
var dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log (dadoUtente);
