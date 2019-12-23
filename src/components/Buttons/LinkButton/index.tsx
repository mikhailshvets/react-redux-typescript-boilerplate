import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import ButtonBase, { ButtonProps } from '@material-ui/core/Button'

const LinkButton = ({ children, ...props }: ButtonProps & LinkProps) => (
  <ButtonBase component={Link} {...props}>
    {children}
  </ButtonBase>
);

export default LinkButton
