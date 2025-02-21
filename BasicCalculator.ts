interface Calculator {
    operate(operator: string, num1: number, num2: number): number;
}
class BasicCalculator implements Calculator {
    operate(operator: string, num1: number, num2: number): number {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                throw new Error('Invalid operator');
        }
    }
}
const calculator = new BasicCalculator();
const num1 = parseFloat(prompt('Enter the first number:'));
const num2 = parseFloat(prompt('Enter the second number:'));
const operator = prompt('Enter the operator (+, -, *, /):');
const result = calculator.operate(operator, num1, num2);
console.log(`Result: ${result}`);

