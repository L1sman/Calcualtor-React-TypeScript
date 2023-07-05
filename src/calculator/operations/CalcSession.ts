import { Commands } from './Commands';

const getValidResult = (num: number) => (Number.isInteger(num) ? String(num) : String(Math.ceil(num * 1000) / 1000));

export class CalcSession {
  value: number | undefined;

  execute = (operator: string, firstValue: string, secondValue: string) => {
    this.value = new Commands(operator, firstValue, secondValue).execute();
    return getValidResult(this.value);
  };
}
