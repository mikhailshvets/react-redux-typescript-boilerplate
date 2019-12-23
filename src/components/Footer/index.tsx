import React from 'react'
import Grid from '@material-ui/core/Grid'
import { styled } from '@material-ui/styles'
import Text from 'components/Text'
import { Theme, StyledComponentProps } from '@material-ui/core'

export const FOOTER_HEIGHT = 32;

const Wrapper = styled('footer')(({ theme: { spacing } }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: FOOTER_HEIGHT,
  padding: `${spacing(0)}px ${spacing(2)}px`,
  overflow: 'auto'
}));

const Footer = (props: StyledComponentProps) => (
  <Wrapper {...props}>
    <Grid container style={{ flexWrap: 'nowrap' }} justify="center">
      <Text>Copyright © </Text>
      <Text to="/">Your Website</Text>
      <Text>{new Date().getFullYear()}</Text>
    </Grid>
  </Wrapper>
);

export default Footer
