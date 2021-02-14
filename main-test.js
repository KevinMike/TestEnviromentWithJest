const {task1 } = require('./main');

describe('Context I', () => {
  it('should return one if receive one', () => {
    const expected = 1;
    const result = task1(1)

    expect(result).toBe(expected);
  });

});