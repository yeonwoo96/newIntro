import { keyframes, styled } from "styled-components";
import React from "react";
const wiggle = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}

50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
`;
const Photo = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  background: url("public/images/itsme.png") center center;
  background-size: 110%;
  background-position: -20px -30px;
  animation: ${wiggle} 5s infinite ease-in-out;
  @media (max-width: 990px) {
    order: -1;
    margin: 30px 0;
  }
`;
const Second = styled.div`
  margin-top: 300px;
  position: relative;
  height: 100vh;
`;
const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  padding-left: 12vw;
  max-width: 35vw;
`;
const Right = styled.div`
  padding-right: 12vw;
`;
const H2 = styled.h2`
  font-size: 64px;
`;
const IntroBox = styled.div`
  margin-top: 48px;
  font-size: 28px;
`;
const PinBox = styled.p`
  &:first-of-type {
    text-align: end;
  }
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  margin-top: 50px;
  h4 {
    margin-right: 50px;
    font-size: 24px;
  }
  .CircleContainer {
    gap: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
  }
  @media (max-width: 990px) {
    flex-flow: column;
    h4 {
      margin: 0;
      margin-bottom: 30px;
    }
  }
`;
const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 34px;
  }
`;
const SecondPage = React.forwardRef<HTMLDivElement>((props, ref) => {
  // console.log(props);
  return (
    <Second ref={ref}>
      <Wrapper>
        <Left>
          <H2>게으르기 위한 노력</H2>
          <IntroBox>
            <PinBox>창의적인 게으름은 개발자의 미덕입니다.</PinBox>
            <PinBox>불필요하게 반복되는 복잡한 코드는 에러를 야기하고</PinBox>
            <PinBox>이러한 코드를 구조화하고 재사용성을 높이며 작업의</PinBox>
            <PinBox>효율성을 높이는 것. 그것이 바로 제가 추구하는</PinBox>
            <PinBox>개발의 방향성 입니다.</PinBox>
          </IntroBox>
          <Skills>
            <h4 className="Hilite">My Skills</h4>
            <div className="CircleContainer">
              <Circle>
                <img alt="html" src="public/images/html.png" />
              </Circle>
              <Circle>
                <img alt="css" src="public/images/css.png" />
              </Circle>
              <Circle>
                <img alt="js" src="public/images/js.png" />
              </Circle>
              <Circle>
                <img alt="js" src="public/images/react.png" />
              </Circle>
              <Circle>
                <img alt="ts" src="public/images/ts.png" />
              </Circle>
              <Circle>
                <img alt="sass" src="public/images/sass.png" />
              </Circle>
            </div>
          </Skills>
        </Left>
        <Right>
          <Photo />
        </Right>
      </Wrapper>
    </Second>
  );
});

export default SecondPage;
