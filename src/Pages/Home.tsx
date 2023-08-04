import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { styled } from "styled-components";
import Second from "./Second";
import Firstpage from "./First";
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

const Home = () => {
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
      <Firstpage></Firstpage>
      <Second></Second>
    </Wrapper>
  );
};

export default Home;
