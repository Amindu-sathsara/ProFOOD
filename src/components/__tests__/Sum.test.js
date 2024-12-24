import Sum from '../Sum';

test('Sum function should calculate the sum of the two numbers', () => {
    // This callback function just write the logic of test cases
    const result =Sum(3, 4);

    expect(result).toBe(7);
})