// skapa funktionerna som anropas i myCalculator så att de funkar så som koden och alla "cases" antyder

export function myCalculator(operator, num1, num2) {
    switch (operator) {
        case '+':
            function myAddFunction(num1, num2) {
                return num1 + num2
            }
            return myAddFunction(num1, num2)

        case '-':
            function mySubtractFunction(num1, num2) {
                return num1 - num2
            }
            return mySubtractFunction(num1, num2)

        case '*':
            function myMultiplyFunction(num1, num2) {
                return num1 * num2
            }
            return myMultiplyFunction(num1, num2)

        case '/':
            function myDivisionFunction(num1, num2) {
                return num1 / num2
            }
            return myDivisionFunction(num1, num2)

        default:
            return 'Error operator not found!'
    }
}
