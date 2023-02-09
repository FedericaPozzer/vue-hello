// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.


// console.log("Vue Ok!", Vue);

const app = Vue.createApp({
    data() {
        return {
            message : "Bonjour, VueJS!"
        }
    }
});

app.mount("#root");