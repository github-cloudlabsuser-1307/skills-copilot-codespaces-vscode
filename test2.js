const { add, subtract, multiply, divide } = require('./test');

// test.test.js


// Test suite for the add function
describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(5, 3)).toBe(8);
    });

    test('adds a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
        expect(add(-5, -3)).toBe(-8);
    });

    test('adds a number and zero', () => {
        expect(add(5, 0)).toBe(5);
    });
});

// Test suite for the subtract function
describe('subtract', () => {
    test('subtracts two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts a larger number from a smaller number', () => {
        expect(subtract(3, 5)).toBe(-2);
    });

    test('subtracts a number and zero', () => {
        expect(subtract(5, 0)).toBe(5);
    });
});

// Test suite for the multiply function
describe('multiply', () => {
    test('multiplies two positive numbers', () => {
        expect(multiply(5, 3)).toBe(15);
    });

    test('multiplies a positive and a negative number', () => {
        expect(multiply(5, -3)).toBe(-15);
    });

    test('multiplies a number by zero', () => {
        expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
        expect(multiply(-5, -3)).toBe(15);
    });
});

// Test suite for the divide function
describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('divides a positive number by a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    test('divides two negative numbers', () => {
        expect(divide(-6, -3)).toBe(2);
    });

    test('returns an error message when dividing by zero', () => {
        expect(divide(6, 0)).toBe("Error! Division by zero.");
    });
});const { add, subtract, multiply, divide } = require('./test');

// test.test.js


// Test suite for the add function
describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(5, 3)).toBe(8);
    });

    test('adds a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
        expect(add(-5, -3)).toBe(-8);
    });

    test('adds a number and zero', () => {
        expect(add(5, 0)).toBe(5);
    });
});

// Test suite for the subtract function
describe('subtract', () => {
    test('subtracts two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts a larger number from a smaller number', () => {
        expect(subtract(3, 5)).toBe(-2);
    });

    test('subtracts a number and zero', () => {
        expect(subtract(5, 0)).toBe(5);
    });
});

// Test suite for the multiply function
describe('multiply', () => {
    test('multiplies two positive numbers', () => {
        expect(multiply(5, 3)).toBe(15);
    });

    test('multiplies a positive and a negative number', () => {
        expect(multiply(5, -3)).toBe(-15);
    });

    test('multiplies a number by zero', () => {
        expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
        expect(multiply(-5, -3)).toBe(15);
    });
});

// Test suite for the divide function
describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('divides a positive number by a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    test('divides two negative numbers', () => {
        expect(divide(-6, -3)).toBe(2);
    });

    test('returns an error message when dividing by zero', () => {
        expect(divide(6, 0)).toBe("Error! Division by zero.");
    });
});