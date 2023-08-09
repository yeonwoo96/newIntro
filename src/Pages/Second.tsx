import { keyframes, styled } from "styled-components";
import React from "react";
import { Donut } from "../Components/Donut";

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
  background: url("public/images/masterpiece.jpg") center center;
  background-size: 140%;
  background-position: 80%;

  animation: ${wiggle} 5s infinite ease-in-out;
  @media (max-width: 1500px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 990px) {
    order: -1;
    margin: 30px 0;
  }
`;
const Second = styled.div`
  margin-top: 300px;
  position: relative;
  font-weight: 600;
`;
const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1500px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    position: relative;
    opacity: 0;
    scale: 0;
    transform-origin: 0 50%;
    transform: translate(0px, 30%);
    transform: rotate(45deg);

    &.show {
      opacity: 1;
      scale: 1;
      transform: translate(0px, 0%);
      transition: all 0.5s;
    }
  }
`;
const Left = styled.div`
  padding-left: 12vw;
  max-width: 35vw;
  @media (max-width: 1500px) {
    text-align: center;
    padding-left: 0;
    max-width: fit-content;
  }
`;
const Right = styled.div`
  padding-right: 12vw;
  @media (max-width: 1500px) {
    order: -1;
    padding-right: 0;
  }
`;
const H2 = styled.h2`
  color: ${(props) => props.theme.color.titleColorSoft};
  white-space: nowrap;
`;
const IntroBox = styled.div`
  margin: auto;
  margin-top: 48px;
  font-size: 28px;
  font-weight: 400;
  max-width: 60vw;
  min-width: 50%;
  @media (max-width: 1000px) {
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const PinBox = styled.p`
  &:first-of-type {
    text-align: end;
    white-space: nowrap;
    @media (max-width: 1500px) {
      text-align: center;
    }
  }
  @media (max-width: 1500px) {
    text-align: center;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin: auto;
  flex-wrap: wrap;
  margin-top: 50px;
  h4 {
    margin-bottom: 24px;
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
  @media (max-width: 1500px) {
    align-items: center;
  }
`;
const Circle = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    position: absolute;
    top: 0;
  }
  img {
    width: 28px;
    position: absolute;
  }
  span {
    position: absolute;
    bottom: -28px;
  }
`;

const SecondPage = React.forwardRef<HTMLDivElement>((_props, ref) => {
  // console.log(props);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const $target = e.target;

      // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤
      if (e.isIntersecting) {
        $target.classList.add("show");
      } else {
        $target.classList.remove("show");
      }
    });
  });

  // 옵저버할 대상을 선택하여 관찰 시작
  const $items = document.querySelectorAll(".text");
  $items.forEach((item) => {
    io.observe(item);
  });
  return (
    <Second ref={ref}>
      <Wrapper>
        <Left>
          <H2 className="hansan text h2">게으르기 위한 노력</H2>
          <IntroBox>
            <PinBox className="h4 text">
              창의적인 게으름은 개발자의 미덕입니다.
            </PinBox>
            <PinBox className="h4 text">
              불필요하게 반복되는 복잡한 코드는 에러를 야기하고 이러한 코드를
              구조화하고 재사용성을 높이며 작업의 효율성을 높이는 것. 그것이
              바로 제가 추구하는 개발의 방향성 입니다.
            </PinBox>
          </IntroBox>
          <Skills className="text">
            <h4 className="Hilite">My Skills</h4>
            <div className="CircleContainer">
              <Circle>
                <Donut win={85} defeat={20}></Donut>
                <img alt="html" src="../public/images/html.png" />
                <span>85%</span>
              </Circle>
              <Circle>
                <Donut win={80} defeat={20}></Donut>
                <img alt="css" src="public/images/css.png" />
                <span>80%</span>
              </Circle>
              <Circle>
                <Donut win={70} defeat={30}></Donut>
                <img alt="js" src="public/images/js.png" />
                <span>70%</span>
              </Circle>
              <Circle>
                <Donut win={70} defeat={30}></Donut>
                <img alt="js" src="public/images/react.png" />
                <span>70%</span>
              </Circle>
              <Circle>
                <Donut win={65} defeat={35}></Donut>
                <img alt="ts" src="public/images/ts.png" />
                <span>65%</span>
              </Circle>
              <Circle>
                <Donut win={65} defeat={35}></Donut>
                <img alt="sass" src="public/images/sass.png" />
                <span>65%</span>
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
