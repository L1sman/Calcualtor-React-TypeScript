export type KeyPadProp = {
  onButtonClick?: (value: string) => void;
  onDigits: (value: string) => void;
  onSigns: (value: string) => void;
  onOperators: (value: string) => void;
};