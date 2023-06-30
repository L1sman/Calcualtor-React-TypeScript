import { AddCommand } from './addComand';
import { SubCommand } from './subComand';
import { DivCommand } from './divCommand';
import { MulCommand } from './MulCommand';
import { RestCommand } from './restCommand';

export class Commands {
  addCommand: { value: string; execute: (currentValue: string) => number };

  command: { value?: string; execute: (currentValue: string) => number };

  constructor(operator: string, firstValue: string, secondValue: string) {
    this.addCommand = new AddCommand(firstValue);
    this.command = { execute: () => 0 };

    switch (operator) {
      case '+': {
        this.command = new AddCommand(secondValue);
        break;
      }
      case '-': {
        this.command = new SubCommand(secondValue);
        break;
      }
      case 'x': {
        this.command = new MulCommand(secondValue);
        break;
      }
      case '/': {
        this.command = new DivCommand(secondValue);
        break;
      }
      case '%': {
        this.command = new RestCommand(secondValue);
        break;
      }
      default:
        break;
    }
  }

  execute = () => this.command.execute(this.addCommand.value);
}