import { motion } from "framer-motion";
import { useEffect } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 300vh;
  background-color: #000;
`;
const Banner = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background: url("../src/assets/images/masterpiece.jpg") no-repeat center
    center;
  background-size: cover;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  color: #fff;
`;
const H4 = styled.h4`
  font-size: 48px;
`;
const H2 = styled(motion.h2)`
  font-size: 60px;
`;
const H2Var = {
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
const Home = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  // 새로 고침시 화면을 맨위로
  return (
    <Wrapper>
      <Banner>
        <Text className="pacifico">
          <H4>Creative</H4>
          <H2 variants={H2Var} initial="initial" animate="animate">
            FrontEnd <span>&</span>
            <br /> Publisher
          </H2>
          <p className="pacifico">gdg123d</p>
        </Text>
      </Banner>
    </Wrapper>
  );
};

export default Home;
