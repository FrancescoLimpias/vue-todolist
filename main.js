// Vue
const { createApp } = Vue

createApp({

    // Data
    data() {
        return {

            error: false,
            newTask: "",
            tasks: [
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false }
            ]
        }
    },

    // Methods
    methods: {
        addTask() {

            if (this.newTask != "") {

                this.error = false;

                this.tasks.push({
                    text: this.newTask,
                    done: false,
                });

                this.newTask = "";

            } else {

                this.error = true;
                setTimeout(() => this.error = false, 2500)

            }

        },
    },

    // OnMount
    mounted: function () {

    }

}).mount('#app')