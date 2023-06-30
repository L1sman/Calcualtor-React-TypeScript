import React from 'react';
import { ButtonProps } from "./types";
import { StyledButton } from './styled';
class Button extends React.PureComponent<ButtonProps> {
  render(): React.ReactNode
    {
      const {className, value, onButtonClick } = this.props
      const buttonClickHandler = () => onButtonClick(value);
      return (
        <StyledButton className={className} onClick={buttonClickHandler}>
          {value}
        </StyledButton>
      )
    }
}
export default Button