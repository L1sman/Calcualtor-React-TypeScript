import React from 'react';

import { DisplayProps } from './types';
import { StyledDisplay, StyledDisplayHistory, StyledDisplayResult } from './styled';
class Display extends React.PureComponent<DisplayProps> {
  render(): React.ReactNode {
    const { output, displayHistory } = this.props;

    return (
      <StyledDisplay>
        <StyledDisplayHistory id="display-history">{displayHistory}</StyledDisplayHistory>
        <StyledDisplayResult type="text" value={output} readOnly />
      </StyledDisplay>
    );
  }
}

export default Display;