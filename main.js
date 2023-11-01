// SANS FETCH

const url = "https://blockchain.info/ticker"

// créer une requête :

let requete = new XMLHttpRequest() // créer objet
requete.open ("GET", "url") // premier param GET / POST

requete.responseType = 'json' // j'attend du JSON
requete.send() // j'envoie la requête

