import { isEven, isOdd } from './utils';

describe('utils', () => {
  it('should show 2 is an even number', () => {
    expect(isEven(2)).toBeTruthy;
  });

  it('should show 3 is an odd number', () => {
    expect(isOdd(2)).toBeTruthy;
  });
});
