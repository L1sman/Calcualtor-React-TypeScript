export class MulCommand {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  execute = (currentValue: string) => parseFloat(currentValue) * parseFloat(this.value);
}