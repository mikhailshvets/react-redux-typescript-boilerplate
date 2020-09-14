import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import MuiText, { TypographyProps } from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core';
import { CreateCSSProperties } from '@material-ui/styles/withStyles';

export interface TextProps extends React.PropsWithChildren<TypographyProps> {
  last: boolean;
  to?: string;
}

const useTextStyles = makeStyles(
  ({ spacing }: Theme): Record<'root', CreateCSSProperties<TextProps>> => ({
    root: {
      fontWeight: 400,
      fontSize: '0.725rem',
      lineHeight: 1.85,
      marginRight: ({ last }) => (last ? 0 : spacing(1)),
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      '&:hover': {
        textDecoration: ({ to }): string => (to ? 'underline' : 'none'),
      },
    },
  })
);

const Text = ({ children, to, last }: TextProps) => {
  const classes = useTextStyles({ to, last });
  const component = props =>
    to ? <Link to={to} {...props} /> : <span {...props} />;

  return (
    <MuiText variant="subtitle1" className={classes.root} component={component}>
      {children}
    </MuiText>
  );
};

Text.defaultProps = {
  last: false,
};

export default Text;
