import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';

export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  body > iframe {
    display: none !important;
  }
`;
