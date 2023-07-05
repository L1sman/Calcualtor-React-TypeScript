import React from 'react';

import Button from '../button/Button';
import { buttons } from '../../constants/Buttons';
import { KeyPadProp } from './KeyPadProp';
import { StyledKeyPad } from './KeyPadStyle';

class KeyPad extends React.PureComponent<KeyPadProp> {
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