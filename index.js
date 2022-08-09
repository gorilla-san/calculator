const displayInput = document.querySelector(".numbersInput")
const result = document.querySelector(".results")
const numpadButtons = document.querySelectorAll(".number")
const clear = document.querySelector("#clear")
const operations = document.querySelectorAll('.operations button')


let inputVariable = ""
let currentResult = ""
let operation = ""
result.textContent = ""
operations.forEach((button) => {
        button.addEventListener("mousedown", (e) => {
                if (inputVariable === "") {
                        return
                } 
                else if (operation !== ""){
                        if (inputVariable !== "") {
                                operation = button.id;
                                currentResult = parseInt(result.textContent)
                                inputVariable = ""
                                displayInput.textContent += button.textContent;
                                }
                        else return
                        }

                else {
                inputVariable = ""
                operation = button.id;
                displayInput.textContent += button.textContent;
                }
                console.log(operation)
        })
})


numpadButtons.forEach((button) => {
        button.addEventListener("mousedown", (e) => {
                if (operation === "") {
                        displayInput.textContent += button.id
                        inputVariable += button.id
                        result.textContent = inputVariable
                        currentResult = inputVariable
                }
                else {  
                        inputVariable += button.id
                        displayInput.textContent += button.id
                        getOperation()
                }

        })
})


clear.addEventListener("mousedown", (e) => {
        displayInput.textContent = ""
        inputVariable = ""
        currentResult = ""
        operation = ""
        result.textContent = ""
})


function addition () {
        result.textContent = parseInt(currentResult) + parseInt(inputVariable)
}

function subtraction () {
        result.textContent = parseInt(currentResult) - parseInt(inputVariable)
}

function multiplication () {
        result.textContent = parseInt(currentResult) * parseInt(inputVariable)
}

function division () {
        result.textContent = parseInt(currentResult) / parseInt(inputVariable)
}

function getOperation () {
        switch (operation) {
                case "add":
                        addition();
                        break;
                case "subtract": 
                        subtraction();
                        break;
                case "multiply":
                        multiplication();
                        break;
                case "divide":
                        division();
                        break;
        }
}