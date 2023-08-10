import React from "react";
import { styled } from "styled-components";
const ContactsWrapper = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const H2 = styled.h2`
  color: ${(props) => props.theme.color.titleColorThick};
  margin-bottom: 50px;
`;
const H4 = styled.h4`
  margin-bottom: 70px;
`;
const Card = styled.div`
  letter-spacing: 0.1em;

  background: url("/images/cardback.jpg") center center;
  background-size: cover;
  max-width: 90vw;
  max-height: 50vw;
  width: 900px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 100px;
  p,
  li,
  path {
    color: #222222;
    fill: #222222;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-top: 5%;
  height: 80%;
`;
const TopLeft = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #000;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 44px;
  @media (max-width: 1000px) {
    font-size: 4.4vw;
  }
`;
const Job = styled.p`
  font-size: 28px;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 2.8vw;
  }
`;
const TopRight = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (max-width: 1000px) {
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 10px;
  @media (max-width: 1000px) {
    gap: 1vw;
  }
`;
const Li = styled.li`
  color: #181818;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 1000px) {
    font-size: 2.2vw;
    gap: 1vw;
  }
`;
const Bot = styled.div`
  font-weight: 500;
  height: 20%;
  display: flex;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 2.2vw;
  }
`;
const BotMent = styled.p``;
const Svg = styled.svg``;
const Contacts = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <ContactsWrapper ref={ref}>
      <H2 className="h2">CONTACT</H2>
      <H4 className="h4">
        같이 일하실 직원을 찾고 계신가요? 여기 제 명함입니다.
      </H4>
      <Card>
        <Top>
          <TopLeft>
            <Name>SHIN YEON WOO</Name>
            <Job>FRONT-END / PUBLISHER</Job>
          </TopLeft>
          <TopRight>
            <Ul>
              <Li>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </Svg>
                010 5314 3899
              </Li>
              <Li>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </Svg>
                tlsxkrqhd@naver.com
              </Li>
              <Li>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </Svg>
                kite_shin
              </Li>
            </Ul>
          </TopRight>
        </Top>
        <Bot>
          <BotMent>Creative and Lazy Developer</BotMent>
        </Bot>
      </Card>
    </ContactsWrapper>
  );
});

export default Contacts;
