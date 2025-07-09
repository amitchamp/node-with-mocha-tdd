const { expect } = require('chai');
const app = require('../app');

describe('App', () => {
  it('should return 0 for empty string', () => {
    const result = app.add('');
    expect(result).to.equal(0);
  });

  it('should return 1 for 1', () => {
    const result = app.add('1');
    expect(result).to.equal(1);
  });

  it('should return 6 for 1,5', () => {
    const result = app.add('1,5');
    expect(result).to.equal(6);
  });

  it('should return 6 for 1\n2,3. handle new lines between numbers instead of comma', () => {
    const result = app.add('1\n2,3');
    expect(result).to.equal(6);
  });

  it('should return 3 for //;\n1;2. support different delimiters //;\n1;2', () => {
    const result = app.add('//;\n1;2');
    expect(result).to.equal(3);
  });

  it('should return 6 for //;1;2\n3. support different delimiters //;1;2\n3', () => {
    const result = app.add('//;1;2\n3');
    expect(result).to.equal(6);
  });

  it('should return 6 for 1,2, 3', () => {
    const result = app.add('1,2, 3');
    expect(result).to.equal(6);
  });

  it('should throw an error when string exist a negative number', () => {
    expect(() => app.add('1,2,3,-4')).to.throw(
      'negative numbers not allowed -4'
    );
  });

  it('should throw an error when string exist a negative number', () => {
    expect(() => app.add('1,2,3,-4,-5')).to.throw(
      'negative numbers not allowed -4, -5'
    );
  });
});
