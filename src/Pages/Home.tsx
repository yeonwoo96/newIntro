import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
const Wrapper = styled(motion.div)`
  overflow-y: hidden;
`;
const WrapperVar = {
  initial: { height: "100vh" },
  animate: {
    height: "auto",
    transition: {
      delay: 2,
    },
  },
};
// 처음 시작시 애니메이션 끝나기 전까진 스크롤을 감추기 위해 전체 높이값을 100vh로 한다
const Box = styled.div`
  height: 100vh;
`;
const Banner = styled(motion.div)`
  position: fixed;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("images/masterpiece.jpg") no-repeat center fixed;
  z-index: -10;
  width: 100vw;
  height: 100%;
`;
const BannerVar = {
  initial: { clipPath: "polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)" },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};
const First = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  /* pointer-events: none; */
  .left {
    top: 45%;
  }
  .right {
    top: 50%;
    font-size: 24px;
    p {
      width: 50rem;
    }
  }
`;

const Text = styled.div`
  position: relative;
  color: #fff;
`;
const H4 = styled.h4`
  font-size: 24px;
`;
const JobBox = styled.div``;
const Job = styled(motion.h2)`
  font-size: 60px;
`;
const MiniBox = styled.div`
  display: flex;
  line-height: 1.4;
  align-items: flex-end;
`;
const And = styled(motion.span)`
  font-size: 30px;
  position: relative;
  margin-left: 20px;
  top: -10px;
`;
const JobVar = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
const AndVar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const Home = () => {
  const Box1 = useRef(null);
  const Box2 = useRef(null);
  const Box3 = useRef(null);
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  // 페이지 새로고침시 맨상단으로
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 1000],
    [
      `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("images/masterpiece.jpg") no-repeat center fixed`,
      `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)),url("images/masterpiece.jpg") no-repeat center fixed`,
    ]
  );
  // useMotionValueEvent(scrollYProgress, "change", () => {
  //   console.log(background);
  // });

  return (
    <Wrapper variants={WrapperVar} initial="initial" animate="animate">
      <Banner variants={BannerVar} style={{ background }} />
      <First ref={Box1}>
        <Text className="pacifico left">
          <H4>Creative</H4>
          <JobBox>
            <MiniBox>
              <Job variants={JobVar}>FrontEnd</Job>
              <And variants={AndVar}>&</And>
            </MiniBox>
            <MiniBox>
              <Job variants={JobVar}>Publisher</Job>
            </MiniBox>
          </JobBox>
        </Text>
        <Text className="right">
          <p>Keep It Simple Stupid!</p>
          <p>You Ain't Gonna Need It</p>
          <p>Do not Repeat Yourself</p>
        </Text>
      </First>
      {/* 첫페이지 */}
      <Box ref={Box2}></Box>
      <Box ref={Box3}></Box>
      <Box></Box>
    </Wrapper>
  );
};

export default Home;
