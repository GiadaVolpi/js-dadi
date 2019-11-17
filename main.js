// chiedo all'utente il suo nome e se vuole giocare a dadi
var nomeUtente = prompt ("Ehi ciao! Come ti chiami? SCRIVIMI IL TUO NOME");
console.log (nomeUtente);
alert ("Piacere" + " " + nomeUtente + ". " + "Io mi chiamo Giada. Hai voglia di giocare a dadi con me?")
alert ("clicca su OK per lanciare il tuo dado");
// variabile per estrazione numero utente
var dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log (dadoUtente);
// comunico all'utente quale numero è uscito dal suo lancio
alert ("Il numero estratto è il" + " " + dadoUtente);
alert ("Se mi dai l'OK lancio il mio dado")
// variabile per estrazione numero PC
var dadoPC = Math.floor(Math.random() * 6) + 1;
console.log (dadoPC);

document.getElementById ("num-utente").innerHTML = dadoUtente;
document.getElementById ("num-pc").innerHTML = dadoPC;

if (dadoUtente < dadoPC) {
    document.getElementById ("nome-utente").innerHTML = nomeUtente;
    document.getElementById ("vinto-perso").innerHTML = "Hai perso";
    document.getElementById ("container-dado-utente").setAttribute ("class", "looser");
    document.getElementById ("container-dado-pc").setAttribute ("class", "winner");
} else if (dadoUtente > dadoPC) {
    document.getElementById ("nome-utente").innerHTML = nomeUtente;
    document.getElementById ("vinto-perso").innerHTML = "Hai vinto!!";
    document.getElementById ("container-dado-utente").setAttribute ("class", "winner");
    document.getElementById ("container-dado-pc").setAttribute ("class", "looser");
} else if (dadoUtente === dadoPC) {
    document.getElementById ("nome-utente").innerHTML = nomeUtente;
    document.getElementById ("container-dado-utente").setAttribute ("class", "equality");
    document.getElementById ("container-dado-pc").setAttribute ("class", "equality");
}
