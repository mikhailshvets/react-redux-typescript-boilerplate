import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Theme, createStyles } from '@material-ui/core';

/**
 @NOTE: This component gives us a great starting point for styling our app by
 setting sensible global defaults. The component is very much the same as
 Material-UI <CSSBaseline /> with some additions.

 [1]. Initializing makes the font look smoother. Beneficial mostly on retina
 screens.
 [2]. Remove the margin in all browsers.
 [3]. Save printer ink by using white as our background.
 [4]. Only changing body + html styles so don't need to render anything.
 */

const styles = ({ palette }: Theme) => createStyles({
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },

    html: {
      WebkitFontSmoothing: 'antialiased' /* [1] */,
      MozOsxFontSmoothing: 'grayscale' /* [1] */,
      boxSizing: 'border-box'
    },

    body: {
      minWidth: '320px',
      minHeight: '100vh',
      margin: 0 /* [2] */,
      backgroundColor: palette.background.default,
      '@media print': {
        backgroundColor: palette.common.white /* [3] */
      }
    }
  }
});

const Component = (props: any) => (<div {...props} />)

const BaseStyles = withStyles(styles)(Component); /* [4] */

export default BaseStyles;
