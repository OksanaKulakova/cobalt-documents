const Color = {
  '--neutral-dark': '#161619',
  '--neutral-dark-grey': '#8D919D',
  '--neutral-light-gray': '#D0D4E3',
  '--neutral-light': '#F9F9FD',
  '--blue-dark': '#0864FA',
  '--blue-light': '#3280FB',
  '--red-dark': '#F72942',
  '--red-light': '#F85368',
  '--white-base': '#FFFFFF',
};

Color['--color-base'] = Color['--neutral-dark'];
Color['--color-background'] = Color['--white-base'];
Color['--color-error'] = Color['--red-dark'];
Color['--color-error-hover'] = Color['--red-light'];
Color['--color-label'] = Color['--neutral-dark-grey'];
Color['--color-border'] = Color['--neutral-dark'];
Color['--color-accent'] = Color['--blue-dark'];
Color['--color-accent-hover'] = Color['--blue-light'];
Color['--color-accent-disabled'] = Color['--neutral-light-gray'];
Color['--color-disabled'] = Color['--neutral-light-gray'];
Color['--color-element-disabled'] = Color['--neutral-dark-grey'];
Color['--color-inactive'] = Color['--neutral-light-gray'];
Color['--color-inactive-link'] = Color['--neutral-dark-grey'];
Color['--color-options-border'] = Color['--neutral-light-gray'];
Color['--color-options-background'] = Color['--neutral-light'];

export default Color;
