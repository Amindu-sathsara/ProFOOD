import Sum from '../Sum';

test('Sum function should calculate the sum of the two numbers', () => {
    // This callback function just write the logic of test cases
    const result =Sum(3, 4);

    expect(result).toBe(7);  //this line is known as the assertion
})

//these two arguments first one is the description of the test 
