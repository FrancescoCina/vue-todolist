console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        linkLogo: "./img/logo.png",
        newDuty: "",
        todos: [
            "Compra pane",
            "Cambia lampadina",
            "Cibo per il cane",
            "Prendi soldi",
            "Compra latte",
        ]
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        addTodo() {
            if (this.newDuty.trim() !== "") {
                this.todos.push(this.newDuty);
                this.newDuty = "";
            } else {
                this.newDuty = "";
            }
        }
    }
})