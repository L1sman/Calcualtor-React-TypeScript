import React from 'react';

import Display from '../components/display/Display';
import KeyPad from '../components/keyPad/KeyPad';

import {
  CalculatorState,
  SignClickHandler,
} from './type';

import {StyledCalculator} from './styled';
import {digits, operators, signs} from '../components/constants/buttons';
import {calculating, checkOperatorDuplicate} from '../functions/calcLogic';

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


  render() {
    const {expression, currentValue, operator, result, isFinish, output} = this.state;
    const resetHandler = () => {
      this.setState({
        currentValue: '',
        expression: '',
        operator: '',
        result: '',
        isFinish: false,
      });
    };

    const cleanEntryHandler = () => this.setState({currentValue: '', result: ''});

    const invertHandler = () => this.setState({currentValue: String(+currentValue * -1)});

    const backHandler = () =>
      this.setState({currentValue: currentValue.slice(0, currentValue.length - 1)});

    const signClickHandler: SignClickHandler = {
      C: resetHandler,
      CE: cleanEntryHandler,
      '←': backHandler,
      '±': invertHandler,
    };

    const buttonClickHandler = (value: string) => {
      if (operator === value) return;

      const btnValue = operators.includes(value) ? ` ${value} ` : value;
      const checkedExpression = checkOperatorDuplicate(operator, value, expression);

      if (signs.includes(value)) {
        const operation = signClickHandler[value];
        operation();
      }

      if (digits.includes(value)) {
        this.setState((state) => ({
          isFinish: false,
          currentValue: state.currentValue + btnValue,
          operator: '',
        }));
      }

      if (operators.includes(value)) {
        let newExpression = value === '=' ? currentValue : currentValue + btnValue;
        if (isFinish) {
          newExpression = result + btnValue;
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
    };
    return (
      <StyledCalculator>
        <div className="main-block">
          <Display output={output} displayHistory={expression}/>
          <KeyPad onButtonClick={buttonClickHandler}/>
        </div>
      </StyledCalculator>
    );
  }
}

export default Calculator