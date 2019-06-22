const FizzBuzz = (num) => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';

  return num;
};

const teste = () => 'teste';
const teste2 = () => 'teste2';

teste();
teste2();

export default FizzBuzz;
