import React from 'react';

import Display from './components/display/Display';
import KeyPad from './components/keypad/KeyPad';

import {CalculatorProps, CalculatorState, SignClickHandler,} from './CalculatorType';

import {StyledCalculator} from './CalculatorStyle';
import {operators} from './constants/ButtonsList';
import {calculating, checkOperatorDuplicate} from './operations/CalcLogic';

class Calculator extends React.PureComponent<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props);

    this.state = {
      expression: '',
      currentValue: '',
      operator: '',
      result: '',
      isFinish: false,
      output: '0',
    };
  }

  componentDidUpdate(prevProps: CalculatorProps, prevState: CalculatorState) {
    const {currentValue, expression, isFinish} = this.state;

    if (expression !== prevState.expression && expression) {
      const currentResult = calculating(expression);
      this.setState({result: currentResult || currentValue});
    }
    if (isFinish !== prevState.isFinish && isFinish) {
      this.setState({expression: ''});
    }
  }

  _resetHandler = () => {
    this.setState({
      currentValue: '',
      expression: '',
      operator: '',
      result: '',
      isFinish: false,
    });
  }
  _cleanEntryHandler = () => {
    this.setState({currentValue: '', result: ''})
  };
  _invertHandler = () => {
    this.setState({currentValue: String(+this.state.currentValue * -1)});
  };
  _backHandler = () => {
    this.setState({currentValue: this.state.currentValue.slice(0, this.state.currentValue.length - 1)});
  };
  signClickHandler: SignClickHandler = {
    C: this._resetHandler,
    CE: this._cleanEntryHandler,
    '←': this._backHandler,
    '±': this._invertHandler,
  };
  onDigits = (value: string) => {
    const btnValue = operators.includes(value) ? ` ${value} ` : value;
    if (value === '.' && this.state.currentValue.includes('.')) {
      this.setState((state) => ({
        isFinish: false,
        currentValue: state.currentValue,
        operator: '',
      }));
    } else {
      this.setState((state) => ({
        isFinish: false,
        currentValue: state.currentValue + btnValue,
        operator: '',
      }));
    }
  }
  onSigns = (value: string) => {
    const operation = this.signClickHandler[value];
    operation();
  }
  onOperators = (value: string) => {
    const btnValue = operators.includes(value) ? ` ${value} ` : value;
    const checkedExpression = checkOperatorDuplicate(this.state.operator, value, this.state.expression);
    let newExpression = value === '=' ? this.state.currentValue : this.state.currentValue + btnValue;
    if (this.state.operator === value) return;
    if (this.state.isFinish) {
      newExpression = this.state.result + btnValue;
    }
    this.setState((state) => ({
      currentValue: '',
      operator: value,
      expression: checkedExpression || state.expression + newExpression,
    }));
    if (value !== '=') {
      this.setState({isFinish: false});
    } else {
      this.setState({isFinish: true, operator: ''});
    }
    if (value === ')' && !this.state.expression.includes('(')) {
      this.setState({
        currentValue: '',
        operator: '',
        expression: ''
      });
    }
  }

  render() {
    const {currentValue, result} = this.state;
    const output = currentValue || result || '0';
    return (
      <StyledCalculator>
        <div className="main-block">
          <Display output={output} displayHistory={this.state.expression}/>
          <KeyPad onDigits={this.onDigits} onOperators={this.onOperators} onSigns={this.onSigns}/>
        </div>
      </StyledCalculator>
    );
  }
}

export default Calculator