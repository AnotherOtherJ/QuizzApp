import { css, Global, useTheme } from "@emotion/react";

export const colors = {
  dark: {
    primary: "#4527a0",
    secondary: "#7953d2",
    background: "#212121",
    inputBackground: "rgba(69, 39, 160, 0.38)",
    inputBoxShadow: "rgba(69, 39, 160, 0.2)",
    inputBoxShadowActive: "rgba(69, 39, 160, 0.4)",
    font: "#ecf0f1",
  },
  light: {
    primary: "#DDD",
    secondary: "#7953d2",
    background: "#FFF",
    inputBackground: "rgba(69, 39, 160, 0.38)",
    inputBoxShadow: "rgba(69, 39, 160, 0.2)",
    inputBoxShadowActive: "rgba(69, 39, 160, 0.4)",
    font: "#000",
  },
};

const GlobalTheme = () => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          * {
            margin: 0;
          }
          html,
          body {
            height: 100%;
          }
          body {
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
          }
          img,
          picture,
          video,
          canvas,
          svg {
            display: block;
            max-width: 100%;
          }
          input,
          button,
          textarea,
          select {
            font: inherit;
          }
          p,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            overflow-wrap: break-word;
          }
        `}
      />
      <Global
        styles={css`
          body {
            background-color: ${theme.background};
            width: 100%;
            height: 100%;
            font-family: "Nunito", sans-serif;
            color: ${theme.font};
            font-size: 17px;
            letter-spacing: 0.5px;
          }
          #root {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            isolation: isolate;
            @media screen and (max-width: 768px) {
              align-items: end;
            }
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      />
    </>
  );
};

export default GlobalTheme;
