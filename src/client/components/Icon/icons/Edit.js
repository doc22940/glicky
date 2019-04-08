// @flow
import React from 'react';
import styled from 'styled-components';

import type { ThemeProps } from '../../../theme';

const Svg = styled.svg`
  fill: ${(p: ThemeProps) => p.theme.colour('text')};
`;

const Edit = (props: {}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export default Edit;
