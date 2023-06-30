export class DivCommand {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  execute = (currentValue: string) => parseFloat(currentValue) / parseFloat(this.value);
}