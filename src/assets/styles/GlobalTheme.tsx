import { css, Global } from "@emotion/react";

export const colors = {
  background: "#24252a",
  background_dark: "#1b1c1f",
  primary: "#3498DB",
};

const GlobalTheme = () => {
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
          :root {
            --shark: #24252a;
            --ebony: #22313f;
          }
          body {
            background-color: var(--shark);
            width: 100%;
            height: 100%;
            font-family: "Nunito", sans-serif;
            color: #ecf0f1;
          }
          #root {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            isolation: isolate;
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
