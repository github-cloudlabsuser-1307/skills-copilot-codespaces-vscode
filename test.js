<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
        .calculator {
            width: 200px;
            height: 300px;
            border: 1px solid #000;
            padding: 10px;
            margin: 0 auto;
        }
        .display {
            width: 100%;
            height: 50px;
            text-align: right;
            margin-bottom: 10px;
            font-size: 24px;
            padding: 5px;
            box-sizing: border-box;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
        }
        .button {
            width: 100%;
            height: 50px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" readonly>
        <div class="buttons">
            <button class="button" onclick="appendNumber('1')">1</button>
            <button class="button" onclick="appendNumber('2')">2</button>
            <button class="button" onclick="appendNumber('3')">3</button>
            <button class="button" onclick="setOperation('+')">+</button>
            <button class="button" onclick="appendNumber('4')">4</button>
            <button class="button" onclick="appendNumber('5')">5</button>
            <button class="button" onclick="appendNumber('6')">6</button>
            <button class="button" onclick="setOperation('-')">-</button>
            <button class="button" onclick="appendNumber('7')">7</button>
            <button class="button" onclick="appendNumber('8')">8</button>
            <button class="button" onclick="appendNumber('9')">9</button>
            <button class="button" onclick="setOperation('*')">*</button>
            <button class="button" onclick="appendNumber('0')">0</button>
            <button class="button" onclick="clearDisplay()">C</button>
            <button class="button" onclick="calculateResult()">=</button>
            <button class="button" onclick="setOperation('/')">/</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');
        let currentOperation = null;
        let firstOperand = null;

        function appendNumber(number) {
            display.value += number;
        }

        function setOperation(operation) {
            if (display.value === '') return;
            firstOperand = parseFloat(display.value);
            currentOperation = operation;
            display.value = '';
        }

        function calculateResult() {
            if (currentOperation === null || display.value === '') return;
            let secondOperand = parseFloat(display.value);
            let result;
            switch (currentOperation) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return;
            }
            display.value = result;
            currentOperation = null;
            firstOperand = null;
        }

        function clearDisplay() {
            display.value = '';
            currentOperation = null;
            firstOperand = null;
        }
    </script>
</body>
</html>