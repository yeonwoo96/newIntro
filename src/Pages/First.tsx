import { motion } from "framer-motion";
import { styled } from "styled-components";
import React from "react";

const Box = styled.div`
  display: flex;
  flex-flow: column;
`;

const First = styled.div`
  box-sizing: border-box;
  padding: 0 60px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  @media (max-width: 1400px) {
    display: block;
    flex-flow: column;
  }
  /* pointer-events: none; */
  .left {
    box-sizing: border-box;
    padding-top: 40vh;
    @media (max-width: 1400px) {
      padding-top: 25vh;
      margin-right: 0;
    }
  }
  .right {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    text-align: right;
    position: absolute;
    right: 60px;
    bottom: 5vh;
    @media (max-width: 460px) {
      bottom: 15vh;
      text-align: center;
      width: auto;
      left: 0;
      right: 0;
      margin: 0 auto;

      align-items: center;
    }
  }
`;
const JobBox = styled.div`
  font-weight: 600;
`;
const Job = styled(motion.h2)`
  line-height: 1.3;
  font-size: 200px;
  span {
    font-size: 80px;
  }
  @media (max-width: 768px) {
    font-size: 120px;
    span {
      font-size: 50px;
    }
  }
  @media (max-width: 460px) {
    font-size: 80px;
    span {
      font-size: 40px;
    }
  }
`;
const MiniBox = styled.div`
  display: flex;
  line-height: 1.4;
  align-items: flex-end;
`;
const Span = styled(motion.span)``;
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
const Introduce = styled(motion.span)`
  font-size: 28px;
  width: 80vw;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
const IntroduceVar = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Text = styled(motion.div)`
  position: relative;
  color: #fff;
`;
const TextVar = {
  initial: {
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delayChildren: 2.5,
      staggerChildren: 0.2,
    },
  },
};
const H3 = styled.h3`
  white-space: nowrap;
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 40px;
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;
const H4 = styled.h4`
  font-size: 24px;
`;

const Firstpage = React.forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  return (
    <First ref={ref}>
      <Text className="left TuskerGrotesk">
        <H4 className="pacifico">Lazy Developer</H4>
        <JobBox>
          <MiniBox>
            <Job variants={JobVar} initial="initial" animate="animate">
              FRONTEND <Span>&</Span>
            </Job>
          </MiniBox>
          <MiniBox>
            <Job variants={JobVar} initial="initial" animate="animate">
              PUBLISHER
            </Job>
          </MiniBox>
        </JobBox>
      </Text>
      <Text
        className="right"
        variants={TextVar}
        initial="initial"
        animate="animate"
      >
        <Box>
          <H3 className="pacifico">KISS, DRY, YAGNI</H3>
          <Introduce variants={IntroduceVar}>
            안녕하세요. 게으른 개발자 신연우입니다.
          </Introduce>
          <Introduce variants={IntroduceVar}>
            게으른 성격덕에 코드는 간단하고 심플하게.
          </Introduce>
          <Introduce variants={IntroduceVar}>
            새로 만들기보단 다시 활용 할 수 있게가 모토입니다.
          </Introduce>
        </Box>
      </Text>
    </First>
  );
});

export default Firstpage;
