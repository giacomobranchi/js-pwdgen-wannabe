let firstName;
let lastName;
let color;
firstName = prompt("Inserisci il tuo nome");
lastName = prompt("Inserisci il tuo cognome");
color = prompt("Inserisci il tuo colore preferito");
let text;
text = firstName + lastName + color + "23";
document.getElementById("message").innerHTML = text;