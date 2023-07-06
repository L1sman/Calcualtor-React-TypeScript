import React from 'react';

import Display from './components/display/Display';
import KeyPad from './components/keypad/KeyPad';

import {
  CalculatorState,
  SignClickHandler,
} from './CalculatorType';

import {StyledCalculator} from './CalculatorStyle';
import {digits, operators, signs} from './constants/Buttons';
import {calculating, checkOperatorDuplicate} from './operations/CalcLogic';

class Calculator extends React.PureComponent<{}, CalculatorState> {
  constructor(props: {}) {
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

  componentDidUpdate() {
    const { currentValue, expression, result, isFinish } = this.state;
    this.setState({ output: currentValue || result || '0' });

    if (expression) {
      const currentResult = calculating(expression);
      this.setState({ result: currentResult || currentValue });
    }
    if (isFinish) {
      this.setState({ expression: '' });
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
  _buttonClickHandler = (value: string) => {
    if (this.state.operator === value) return;

    const btnValue = operators.includes(value) ? ` ${value} ` : value;
    const checkedExpression = checkOperatorDuplicate(this.state.operator, value, this.state.expression);

    if (signs.includes(value)) {
      const operation = this.signClickHandler[value];
      operation();
    }

    if (digits.includes(value)) {
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


    if (operators.includes(value)) {
      let newExpression = value === '=' ? this.state.currentValue : this.state.currentValue + btnValue;
      if (this.state.isFinish) {
        newExpression = this.state.result + btnValue;
      }
      this.setState((state) => ({
        currentValue: '',
        operator: value,
        expression: checkedExpression || state.expression + newExpression,
      }));
    }
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
  };

  render() {
    return (
      <StyledCalculator>
        <div className="main-block">
          <Display output={this.state.output} displayHistory={this.state.expression}/>
          <KeyPad onButtonClick={this._buttonClickHandler}/>
        </div>
      </StyledCalculator>
    );
  }
}

export default Calculator