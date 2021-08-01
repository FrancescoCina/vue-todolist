console.log("Vue", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        linkLogo: "./img/logo.png",
        newDuty: "",
        todos: [
            { text: "Compra pane", done: false },
            { text: "Cambia lampadina", done: false },
            { text: "Cibo per il cane", done: false },
            { text: "Prendi soldi", done: false },
            { text: "Compra latte", done: false },
        ],
        searchTodo: "",
        isGoingToAdd: false,
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        addTodo() {
            if (this.newDuty.trim() !== "") {
                this.todos.push({ text: this.newDuty, done: false });
            } this.newDuty = "";
        },
        wantAdd() {
            this.isGoingToAdd = true;
        },
        goBack() {
            this.isGoingToAdd = false;
            this.newDuty = "";
        },
        searchInList(task) {
            if (!this.searchTodo.trim()) {
                return true;
            }
            const inputValueChecked = this.searchTodo.trim().toLowerCase();
            task = task.toLowerCase();
            return task.includes(inputValueChecked);
        },
        toggleDone(index) {
            const updatedTasks = this.todos.map((task, updatedTasksIndex) => {
                if (index === updatedTasksIndex) {
                    task.done = !task.done;
                }
                return task;
            })
            return this.todos = updatedTasks;
        },
        isDone(index) {
            return this.todos[index].done;
        },
    },
})



