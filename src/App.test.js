/* eslint-disable no-undef */
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('returns a valid React element', () => {
    const expected = true;
    // eslint-disable-next-line react/jsx-filename-extension
    const actual = React.isValidElement(<App />);

    expect(actual).toEqual(expected);
  });
});
