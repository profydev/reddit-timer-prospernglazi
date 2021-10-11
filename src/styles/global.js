import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
:root {
  --orange: #FDB755;
  --light-blue: #8FCAFF;
  --dark-blue: #1E2537;
  --text-color: #060606;
  --text-color-light: #AAA9A7;

  /* Cell colors */
  --yellowish-green: #E0E5A3;
  --lighter-green: #A9D194;
  --light-green: #A0CE93;
  --green: #8CC894;
  --dark-green: #5EB391;
  --bluish-green: #3984A3;
}
`;

export default GlobalStyle;
