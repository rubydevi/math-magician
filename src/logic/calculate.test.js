import calculate from './calculate';

// Test cases for the calculate function
describe('calculate function', () => {
  it('should clear the calculator data object when buttonName is "AC"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next number when buttonName is a number', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '7');
    expect(result).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });

  it('should handle the decimal point correctly when buttonName is "."', () => {
    const result1 = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result1).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });

    const result2 = calculate({ total: '10', next: '5.7', operation: '+' }, '.');
    expect(result2).toEqual({
      total: '10',
      next: '5.7',
      operation: '+',
    });
  });
});
