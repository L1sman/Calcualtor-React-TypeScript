export type CalculatorState = {
  expression: string;
  currentValue: string;
  operator: string;
  result: string;
  isFinish: boolean;
  output: string;
};

export type SignClickHandler = {
  [key: string]: () => void;
};