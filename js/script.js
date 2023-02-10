// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.


// console.log("Vue Ok!", Vue);

// uguale a const { createApp } = Vue
const app = Vue.createApp({
    data() {
        return {
            message : "Bonjour, VueJS!",
            img : "./img/pikachu.png",
        }
    },

    methods: {
        click() {
            alert("Hai cliccato Pikachu!");
        }
    }
});

app.mount("#root");
// root può chiamarsi come voglio (anche app)!

