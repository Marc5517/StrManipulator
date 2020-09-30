new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        word: "",
        size: "",
        operation: "toUpperString"
    },
    methods: {
        changeSize() {
            console.log(this.word)
            if (this.word != "")
            {
            if (this.operation == "toUpperString")
            {
                this.size = this.word.toUpperCase()
            }
            if (this.operation == "toLowString")
            {
                this.size = this.word.toLowerCase()
            }
        }
        else
        {
            this.size = "Error"
        }
            
        }
    }
})