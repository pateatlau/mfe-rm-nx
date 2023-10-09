const isEven = (x: number): boolean => !(x % 2 !== 0);
const isOdd = (x: number): boolean => !isEven(x);

export { isEven, isOdd };
