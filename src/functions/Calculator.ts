import { Commands } from './commands';

const getValidResult = (num: number) => (Number.isInteger(num) ? String(num) : String(Math.ceil(num * 1000) / 1000));

export class Calculator {
  value: number | undefined;

  execute = (operator: string, firstValue: string, secondValue: string) => {
    this.value = new Commands(operator, firstValue, secondValue).execute();
    return getValidResult(this.value);
  };
}
