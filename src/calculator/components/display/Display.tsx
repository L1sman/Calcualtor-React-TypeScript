import React from 'react';

import { DisplayProp } from './DisplayProp';
import { StyledDisplay, StyledDisplayHistory, StyledDisplayResult } from './DisplayStyle';
class Display extends React.PureComponent<DisplayProp> {
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