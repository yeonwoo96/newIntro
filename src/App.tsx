import Home from "./Pages/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* ::-webkit-scrollbar {
  display: none;
} */
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
  background: #000;
  font-size: 14px;
  color: #4d5156;
  font-family: 'Noto Sans KR', sans-serif;
	line-height: 1.4;
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
.TuskerGrotesk{
  font-family: "TuskerGrotesk";
  font-weight: 400;
}
`;
function App() {
  return (
    <>
      {/* <LoadingPage></LoadingPage> */}
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
