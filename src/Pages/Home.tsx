import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Firstpage from "./First";
import SecondPage from "./Second";
import Header from "../Components/Header";
const Wrapper = styled(motion.div)`
  overflow-y: hidden;
`;

const Banner = styled(motion.div)`
  position: fixed;
  z-index: -10;
  width: 100vw;
  height: 100%;
`;

const BannerVar = {
  initial: { clipPath: "polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)" },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

const Home = () => {
  const firstPageRef = useRef<HTMLDivElement>(null);
  const secondPageRef = useRef<HTMLDivElement>(null);
  const [firstPageY, setFirstPageY] = useState<number>(0);
  const [secondPageY, setSecondPageY] = useState<number>(0);
  useEffect(() => {
    if (firstPageRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setFirstPageY(firstPageRef.current.offsetTop);
      console.log("FirstPage Y-coordinate:", firstPageY);
    }
    if (secondPageRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setSecondPageY(secondPageRef.current.offsetTop);
      console.log("SecondPage Y-coordinate:", secondPageY);
    }
  }, [firstPageY, secondPageY]);
  // y좌표 구하기
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
      `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url("images/masterpiece.jpg") no-repeat 80% fixed`,
      `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)),
  url("images/masterpiece.jpg") no-repeat 80% fixed`,
    ]
  );
  return (
    <Wrapper>
      <Header firstPageY={firstPageY} secondPageY={secondPageY} />
      <Banner
        variants={BannerVar}
        style={{ background }}
        initial="initial"
        animate="animate"
      />
      <Firstpage ref={firstPageRef} />
      <SecondPage ref={secondPageRef} />
    </Wrapper>
  );
};

export default Home;
