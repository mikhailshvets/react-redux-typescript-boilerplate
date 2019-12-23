import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import { HEADER_HEIGHT } from 'components/Header';
import { FOOTER_HEIGHT } from 'components/Footer';
import { Theme } from '@material-ui/core';

export const PADDING_X_UNIT = 3;
export const PADDING_Y_UNIT = 3;

const Wrapper = styled('main')(({ theme: { spacing } }: { theme: Theme }) => ({
  position: 'relative',
  display: 'block',
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
  overflow: 'auto',
  padding: spacing(PADDING_X_UNIT)
}));

const Main = ({ children, ...props }: React.PropsWithChildren<Partial<Component>>) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Main;
