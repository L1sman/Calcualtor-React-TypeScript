import { Calculator } from './Calculator';

const sign = '+-x/%';

const isPriority = (prevOperator: string, nextOperator: string) => {
  if (nextOperator === '(' || nextOperator === ')') {
    return false;
  }
  return !((prevOperator === 'x' || prevOperator === '/') && (nextOperator === '+' || nextOperator === '-'));
};

export const calculating = (expression: string) => {
  // debugger;
  const arr = expression.split(' ');
  const values: string[] = [];
  const operators: string[] = [];
  const calculator = new Calculator();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '') {
      if (!Number.isNaN(+arr[i])) {
        values.push(arr[i]);
      } else if (arr[i] === '(') {
        operators.push(arr[i]);
      } else if (arr[i] === ')') {
        while (operators[operators.length - 1] !== '(') {
          const operator = operators.pop();
          const currentValue = values.pop();
          const previousValue = values.pop();

          if (operator && previousValue && currentValue) {
            values.push(calculator.execute(operator, previousValue, currentValue));
          }
        }
        operators.pop();
      } else if (sign.includes(arr[i])) {
        while (operators.length && isPriority(arr[i], operators[operators.length - 1])) {
          const operator = operators.pop();
          const currentValue = values.pop();
          const previousValue = values.pop();

          if (operator && previousValue && currentValue) {
            values.push(calculator.execute(operator, previousValue, currentValue));
          }
        }

        operators.push(arr[i]);
      }
    }
  }
  if (values.length <= operators.length) {
    operators.pop();
  }


  while (operators.length) {
    const operator = operators.pop();
    const currentValue = values.pop();
    const previousValue = values.pop();

    if (operator && previousValue && currentValue) {
      values.push(calculator.execute(operator, previousValue, currentValue));
    }
  }

  return values.pop();
};

export const checkOperatorDuplicate = (prevOperator: string, nextOperator: string, expression: string) => {
  let checkedExpression = '';

  if (nextOperator === '(' || nextOperator === ')' || prevOperator === ')') return checkedExpression;

  if (prevOperator && prevOperator !== nextOperator && !parseInt(nextOperator, 10)) {
    const searchValue = expression.trim().slice(-1);
    checkedExpression = expression.replace(searchValue, nextOperator);
  }
  return checkedExpression;
};