// Chiedi all’utente il suo nome

let nome = prompt("Scrivi il tuo nome");

// Chiedi il suo cognome

let cognome = prompt("Scrivi il tuo cognome");

// Chiedi il suo colore preferito

let colore = prompt("Qual è il tuo colore preferito?");

// Scrivi sulla pagina nomecognomecolorepreferito21

document.getElementById('result').innerHTML=`${nome}${cognome}${colore}21`;