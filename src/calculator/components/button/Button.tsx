import React from 'react';
import {ButtonProp} from "./ButtonProp";
import {StyledButton} from './ButtonStyle';

class Button extends React.PureComponent<ButtonProp> {
  render(): React.ReactNode {
    const {className, value, onButtonClick} = this.props
    const buttonClickHandler = () => onButtonClick(value);
    return (
      <StyledButton className={className} onClick={buttonClickHandler}>
        {value}
      </StyledButton>
    )
  }
}

export default Button