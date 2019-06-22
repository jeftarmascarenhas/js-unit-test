const sum = (num, num2) => num + num2;
const sub = (num, num2) => num - num2;
const mult = (num, num2) => num * num2;
const div = (num, num2) => (num === 0 || num2 === 0 ? 'not possibity div per zero' : num / num2);

export {
  sum, sub, mult, div,
};
