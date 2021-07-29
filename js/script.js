console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        linkLogo: "./img/logo.png",
        todos: [
            "Compra pane",
            "Cambia lampadina",
            "Cibo per il cane",
            "Prendi soldi",
            "Compra latte",
        ]
    },
    methods: {

    }
})