// calculator functions //
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case 'x':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
      }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    
        if(this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

//select buttons//
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//add eventListeners//
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    calculator.clear();
})


// toggle switch and theme styles //
var toggles = document.getElementsByClassName('toggle');
var arr = [...toggles];
const body = document.body;
const title = document.querySelector('.title');
const triToggle = document.querySelector('.tri-state-toggle');
const oneToggle = document.querySelector('#one');
const twoToggle = document.querySelector('#two');
const threeToggle = document.querySelector('#three');
const outputTheme = document.querySelector('.output');
const numberTheme = document.querySelector('.numbers');
const btnTheme = document.querySelectorAll('.btn');
const btnClear = document.querySelector('.btnClear');
const btnReset = document.querySelector('.btnReset');
const btnEquals = document.querySelector('.btnEquals');

arr.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.style.opacity = '1';

        if (index == 0) {
            //theme 1//
            body.classList.remove('body-theme2', 'body-theme3');
            body.classList.add('body-theme1');

            title.classList.remove('title-theme2', 'title-theme3');
            title.classList.add('title-theme1');

            triToggle.classList.remove('tri-state-toggle-theme2', 'tri-state-toggle-theme3');
            triToggle.classList.add('tri-state-toggle-theme1');

            oneToggle.style.backgroundColor = 'hsl(6, 63%, 50%)';

            outputTheme.classList.remove('output-theme2', 'output-theme3');
            outputTheme.classList.add('output-theme1');

            numberTheme.classList.remove('numbers-theme2', 'numbers-theme3');
            numberTheme.classList.add('numbers-theme1');

            for(btn of btnTheme) {
                btn.classList.remove('btn-theme2', 'btn-theme3');
                btn.classList.add('btn-theme1');
            }

            btnClear.classList.remove('btnClear-theme2', 'btnClear-theme3');
            btnClear.classList.add('btnClear-theme1');

            btnReset.classList.remove('btnReset-theme2', 'btnReset-theme3');
            btnReset.classList.add('btnReset-theme1');

            btnEquals.classList.remove('btnEquals-theme2', 'btnEquals-theme3');
            btnEquals.classList.add('btnEquals-theme1');

          } else if (index == 1) {
              //theme 2//
            body.classList.remove('body-theme1', 'body-theme3');
            body.classList.add('body-theme2');

            title.classList.remove('title-theme1', 'title-theme3');
            title.classList.add('title-theme2');

            triToggle.classList.remove('tri-state-toggle-theme1', 'tri-state-toggle-theme3');
            triToggle.classList.add('tri-state-toggle-theme2');

            twoToggle.style.backgroundColor = 'hsl(25, 98%, 40%)';

            outputTheme.classList.remove('output-theme1', 'output-theme3');
            outputTheme.classList.add('output-theme2');
            
            numberTheme.classList.remove('numbers-theme1', 'numbers-theme3');
            numberTheme.classList.add('numbers-theme2');

            for(btn of btnTheme) {
                btn.classList.remove('btn-theme1', 'btn-theme3');
                btn.classList.add('btn-theme2');
            }

            btnClear.classList.remove('btnClear-theme1', 'btnClear-theme3');
            btnClear.classList.add('btnClear-theme2');

            btnReset.classList.remove('btnReset-theme1', 'btnReset-theme3');
            btnReset.classList.add('btnReset-theme2');

            btnEquals.classList.remove('btnEquals-theme1', 'btnEquals-theme3');
            btnEquals.classList.add('btnEquals-theme2');

          } else {
              //theme 3//
            body.classList.remove('body-theme1', 'body-theme2');
            body.classList.add('body-theme3');

            title.classList.remove('title-theme2', 'title-theme1');
            title.classList.add('title-theme3');

            triToggle.classList.remove('tri-state-toggle-theme2', 'tri-state-toggle-theme1');
            triToggle.classList.add('tri-state-toggle-theme3');

            threeToggle.style.backgroundColor = 'hsl(176, 100%, 44%)';
            
            outputTheme.classList.remove('output-theme1', 'output-theme2');
            outputTheme.classList.add('output-theme3');

            numberTheme.classList.remove('numbers-theme2', 'numbers-theme1');
            numberTheme.classList.add('numbers-theme3');

            for(btn of btnTheme) {
                btn.classList.remove('btn-theme1', 'btn-theme2');
                btn.classList.add('btn-theme3');
            }

            btnClear.classList.remove('btnClear-theme2', 'btnClear-theme1');
            btnClear.classList.add('btnClear-theme3');

            btnReset.classList.remove('btnReset-theme2', 'btnReset-theme1');
            btnReset.classList.add('btnReset-theme3');

            btnEquals.classList.remove('btnEquals-theme2', 'btnEquals-theme1');
            btnEquals.classList.add('btnEquals-theme3');

          }

        arr.filter(function(item) {
            return item != element;
        })
        .forEach((item) => {
            item.style.opacity = '0';
        });
    })
})

// theme onload //
function themeStart() {
    body.classList.add('body-theme1');
    title.classList.add('title-theme1');
    triToggle.classList.add('tri-state-toggle-theme1');
    oneToggle.style.backgroundColor = 'hsl(6, 63%, 50%)';
    outputTheme.classList.add('output-theme1');
    numberTheme.classList.add('numbers-theme1');
    btnClear.classList.add('btnClear-theme1');
    btnReset.classList.add('btnReset-theme1');
    btnEquals.classList.add('btnEquals-theme1');

    for(btn of btnTheme) {
        btn.classList.add('btn-theme1');
    }
}
