class Calculator {
    constructor() {
        this.input = document.getElementById("input");
        this.output = document.getElementById("output");
        this.clearButton = document.getElementById("clear");
        this.equalsButton = document.getElementById("equals");
        this.operatorButtons = document.querySelectorAll(".operator");

        this.clear();
        this.attachListeners();
    }

    attachListeners() {
        this.clearButton.addEventListener("click", () => this.clear());
        this.equalsButton.addEventListener("click", () => this.evaluate());

        this.operatorButtons.forEach(button => {
            button.addEventListener("click", event => this.setOperator(event.target.id));
        });
    }

    clear() {
        this.currentValue = "";
        this.operator = "";
        this.output.value = "";
        this.input.value = "";
    }

    setOperator(operator) {
        if (this.currentValue) {
            this.evaluate();
        }
        this.operator = operator;
        this.currentValue = this.input.value;
        this.input.value = "";
    }

    evaluate() {
        let result = 0;
        switch(this.operator) {
            case "add":
                result = Number(this.currentValue) + Number(this.input.value);
                break;
            case "subtract":
                result = Number(this.currentValue) - Number(this.input.value);
                break;
            case "multiply":
                result = Number(this.currentValue) * Number(this.input.value);
                break;
            case "divide":
                result = Number(this.currentValue) / Number(this.input.value);
                break;
        }
        this.output.value = result;
        this.currentValue = result;
        this.operator = "";
    }
}

const calculator = new Calculator();