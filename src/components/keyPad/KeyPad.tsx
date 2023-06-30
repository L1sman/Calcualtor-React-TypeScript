import React from 'react';

import Button from '../button/Button';
import { buttons } from '../constants/buttons';
import { KeyPadProps } from './types';
import { StyledKeyPad } from './styled';

class KeyPad extends React.PureComponent<KeyPadProps> {
  render(): React.ReactNode {
    const { onButtonClick } = this.props;

    return (
      <StyledKeyPad>
        {buttons.map(({ id, className, value }) => (
          <Button key={id} className={className} value={value} onButtonClick={onButtonClick} />
        ))}
      </StyledKeyPad>
    );
  }
}

export default KeyPad;