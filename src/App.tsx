import Home from "./Pages/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme/myTheme";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
:root {
       --vh: 100%;
   }
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Pacifico&display=swap');
::-webkit-scrollbar {
  display: none;
}
/* 스크롤 없애기 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  color:#fff;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  background: rgba(19,19,19,1 );
  font-size: 14px;
  color: #4d5156;
  font-family: 'Noto Sans KR', sans-serif;
	line-height: 1.4;
  overflow-x: hidden;
  @media (max-width: 1000px) {
    font-size:12px;
  }
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.pacifico{
  font-family: 'Pacifico', cursive;
  font-weight: 400;
}
.hansan{
  font-family:  'Black Han Sans', sans-serif;
  font-weight: 400;
}
.TuskerGrotesk{
  font-family: "TuskerGrotesk";
  font-weight: 400;
}
.h2{
  font-size: 64px;
  @media (max-width: 1000px) {
    font-size: 48px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
}
.h3{
  font-size: 36px;
  @media (max-width: 1000px) {
    font-size: 28px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
}
.h4{
  font-size: 28px;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
}
.h5{
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    @media (max-width: 1000px) {
    font-size: 12px;
  }
  }
}
html,body{
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
 
}
`;

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <ThemeProvider theme={myTheme}>
        {/* <LoadingPage></LoadingPage> */}
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
