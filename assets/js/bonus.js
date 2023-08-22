let firstName;
let lastName;
let color;
let key
firstName = prompt("Inserisci il tuo nome");
lastName = prompt("Inserisci il tuo cognome");
color = prompt("Inserisci il tuo colore preferito");
key = prompt("Inserisci una chiave da 3 numeri");
key = 23 + Number(key);
let text;
text = firstName + lastName + color + key;
document.getElementById("message").innerHTML = text;