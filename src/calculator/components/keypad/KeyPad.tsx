import React from 'react';

import Button from '../button/Button';
import {buttonsList, digits, operators, signs} from '../../constants/ButtonsList';
import {KeyPadProp} from './KeyPadProp';
import {StyledKeyPad} from './KeyPadStyle';

class KeyPad extends React.PureComponent<KeyPadProp> {
  render(): React.ReactNode {
    const {onOperators, onDigits, onSigns} = this.props;

    const handlerList = (value: string) => {
      if (digits.includes(value)) {
        onDigits(value)
      }
      if (signs.includes(value)) {
        onSigns(value)
      }
      if (operators.includes(value)) {
        onOperators(value)
      }
    }
    return (
      <StyledKeyPad>
        {buttonsList.map(({id, className, value}) => (
          <Button
            key={id}
            className={className}
            value={value}
            onButtonClick={() => handlerList(value)}/>
        ))}
      </StyledKeyPad>
    );
  }
}

export default KeyPad;