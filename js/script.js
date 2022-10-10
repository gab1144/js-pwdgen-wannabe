let output;

const nomeUtente = prompt("Qual'è il tuo nome?");
const cognomeUtente = prompt("Qual'è il tuo cognome?");
const colorePreferito = prompt("Qual'è il tuo colore preferito?");

output = `
  <strong> (insicurissimo) Password generator </strong> 
  <br>
  Password: ${nomeUtente}${cognomeUtente}${colorePreferito}22
`;

document.getElementById('password').innerHTML += output;