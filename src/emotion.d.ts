import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    primary: string;
    secondary: string;
    background: string;
    inputBackground: string;
    inputBoxShadow: string;
    inputBoxShadowActive: string;
    font: string;
  }
}
