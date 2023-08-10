import styled, { keyframes } from "styled-components";

const StudyContainer = styled.div`
  margin-top: 300px;
  width: 100vw;
  box-sizing: border-box;
  padding: 0 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StudyWrap = styled.div`
  display: flex;
  gap: 200px;
  width: 100%;
  /* align-items: center; */

  @media (max-width: 1500px) {
    flex-flow: column;
    gap: 0;
    align-items: center;
  }
`;
const Left = styled.div`
  position: relative;
  border-radius: 60px;
  background: url("/images/itsme.png");
  background-size: cover;
  background-position: 70%;
  width: 500px;
  height: 500px;
  @media (max-width: 1500px) {
    margin-bottom: 70px;
  }
  @media (max-width: 600px) {
    width: 80vw;
    height: 80vw;
  }
`;
const Cake = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  font-size: 54px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 0px;
  @media (max-width: 500px) {
    font-size: 32px;
    bottom: 0px;
    right: 0px;
  }
`;
const Right = styled.div`
  font-size: 14px;
  @media (min-width: 1000px) {
    font-size: 18px;
  }
  h3 {
    color: ${(props) => props.theme.color.titleColorThick};
    margin-bottom: 1.4rem;
  }
  h4 {
    color: ${(props) => props.theme.color.titleColorThick};
    margin-bottom: 1.2rem;
  }
  .educationwrap {
    margin-bottom: 24px;
    .date {
      color: ${(props) => props.theme.color.titleColorSoft};
    }
    li {
      margin-bottom: 14px;
    }
  }
  @media (max-width: 1500px) {
    flex-flow: column;
    gap: 0;
    text-align: center;
  }
`;
const move = keyframes`
	//단계 별로 변화를 주는 코드
	0%{
    transform: rotate( 0deg )
    }
    
    100%{
    	transform: rotate( 360deg )
    }`;
const CircleText = styled.img`
  scale: 1.5;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${move} 10s infinite linear;
`;
const Study = () => {
  return (
    <StudyContainer>
      <StudyWrap>
        <Left>
          <Cake>
            <CircleText src="/images/CircleText.svg" />
            🍰
          </Cake>
        </Left>
        <Right>
          <h3 className="h2">이런걸 배웠습니다.</h3>
          <div className="educationwrap">
            <h4 className="h4 Hilite">Education ✏️</h4>
            <ul className="education">
              <li>
                <span className="date"> 2022.02.01 - 2022.06.29</span>
                <br />
                🧑🏻‍💻 코리아 IT 아카데미 프론트엔드(개발자) 과정{" "}
              </li>
              <li>
                <span className="date">2022.07.01 - 2022.12.01</span>
                <br />
                👩🏼‍💻 독학 및 NomadCoder React JS 마스터 클래스 수강
              </li>
              <li>
                <span className="date">2022.12.01 - 2023.05.31</span>
                <br />
                🧑🏻‍💻 제로베이스 프론트엔드 스쿨 10기 수료{" "}
              </li>
            </ul>
          </div>
          <div className="Bookwrap">
            <h4 className="h4 ">Book 📚</h4>
            <ul className="book">
              <li>📕 Do it! HTML+CSS+자바스크립트 웹 표준의 정석</li>
              <li>📘 리액트를 다루는 기술</li>
            </ul>
          </div>
        </Right>
      </StudyWrap>
    </StudyContainer>
  );
};

export default Study;
