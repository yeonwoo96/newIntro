import { styled } from "styled-components";
import Mywork from "../Components/Mywork";
import React from "react";
const ProjectsWrapper = styled.div`
  padding-top: 300px;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 110px 0;
  .textwrap {
    text-align: center;
  }
  &.text {
    position: relative;
    top: 100px;
    opacity: 0;
  }
  &.show {
    opacity: 1;
    top: 0;
    transition: all 1s;
  }
`;
const H2 = styled.h2`
  color: ${(props) => props.theme.color.titleColorThick};
  white-space: nowrap;
  margin-bottom: 24px;
`;
const H4 = styled.p`
  text-align: center;
  box-sizing: border-box;
  padding: 0 20vw;
  margin-bottom: 24px;
`;

const NikeClone = [
  {
    img: "/images/netflixClone.png",
    h3: "PC화면 넷플릭스 구현🎥",
    p: "PC화면 전용으로 넷플릭스 사이트를 간략히 구현 하였습니다. TMDB의 API를 이용해 영화정보를 실시간으로 받아오고 있으며 애니메이션 효과는 Framer-motion을 활용 하였습니다.",
    skill: ["react.png", "ts.png", "rq.svg", "vite.svg"],
    timer: 3,
    github: "https://github.com/yeonwoo96/netflix/tree/master",
    right: true,
    url: "https://netflix-tan-xi.vercel.app/#/",
  },
  {
    img: "/images/nikeclone.png",
    h3: "반응형 나이키 온라인 스토어 🏃‍♂️",
    p: "반응형으로 나이키 공식 온라인 스토어를 홈화면을 구현 하였습니다. 리액트와 타입스크립트를 사용하고 상태 관리 라이브 러리론 리코일을 이용하였습니다.",
    skill: ["react.png", "ts.png", "recoil.svg", "vite.svg"],
    timer: 10,
    github: "https://github.com/yeonwoo96/nikeClone",
    right: false,
    url: "https://yeonwoo96.github.io/nikeClone/",
  },
  {
    img: "/images/ReactFakeShop.png",
    h3: "반응형 리액트 페이크 샵 👔",
    p: "반응형으로 가상 의류 쇼핑몰을 홈화면을 구현 하였습니다. 타입스크립와 리코일이 사용되었고. 상품 리스트와 상세페이지를 구현하고.다크 모드와 화이트 모드 기능을 추가 하였습니다.",
    skill: ["react.png", "recoil.svg"],
    timer: 3,
    github: "https://github.com/yeonwoo96/ReactFakeShop",
    right: true,
    url: "https://react-fake-shop-lake.vercel.app/",
  },
  {
    img: "/images/busanisgood.png",
    h3: "반응형 부산 광역시 홈페이지 🌊",
    p: "반응형으로 부산시 홈페이지를 홈화면을 구현 하였습니다. 리액트와 타입스크립트를 사용 하였습니다.",
    skill: ["react.png", "ts.png", "vite.svg"],
    timer: 6,
    github: "https://github.com/yeonwoo96/Busan",
    right: false,
    url: "https://yeonwoo96.github.io/Busan/",
  },
];
const Projects = React.forwardRef<HTMLDivElement>((_props, ref) => {
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
    <ProjectsWrapper ref={ref} className="text">
      <H2 className="hansan h2 text">포트폴리오</H2>
      <H4 className="h4 text">
        이미지의 마우스를 올리시면 페이지 전체를 보실 수 있습니다 ☕{" "}
      </H4>
      <Mywork source={NikeClone} />
    </ProjectsWrapper>
  );
});

export default Projects;
