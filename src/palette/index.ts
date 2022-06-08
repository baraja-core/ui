enum Color {
  dark = 'dark',
  red = 'red',
  orange = 'orange',
  prideRed = 'prideRed',
  prideOrange = 'prideOrange',
  prideYellow = 'prideYellow',
  prideGreen = 'prideGreen',
  prideBlue = 'prideBlue',
  pridePurple = 'pridePurple',
}

type color = {
  [key in Color]: string;
};

interface Palette {
  color: color;
}

const palette: Palette = {
  color: {
    dark: '#1d2125',
    red: '#dc3545',
    orange: '#e95736',
    prideRed: '#fd3131',
    prideOrange: '#FF9800',
    prideYellow: '#FFEB3B',
    prideGreen: '#4CAF50',
    prideBlue: '#3F51B5',
    pridePurple: '#9C27B0',
  },
};

export default palette;
