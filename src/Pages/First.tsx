import { motion } from "framer-motion";
import { styled } from "styled-components";
import React from "react";

const Box = styled.div`
  width: 50em;
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
    padding-top: 55vh;
    @media (max-width: 1400px) {
      padding-top: 200px;
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
    right: 80px;
    bottom: 100px;
    @media (max-width: 768px) {
      bottom: 200px;
    }
  }
`;
const Introduce = styled(motion.span)`
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
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
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 40px;
`;
const H4 = styled.h4`
  font-size: 24px;
`;
const JobBox = styled.div`
  font-weight: 600;
`;
const Job = styled(motion.h2)`
  line-height: 1;
  font-size: 140px;
  @media (max-width: 768px) {
    font-size: 80px;
  }
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

const Firstpage = React.forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  return (
    <First ref={ref}>
      <Text className="left">
        <H4 className="pacifico">Lazy Developer</H4>
        <JobBox>
          <MiniBox>
            <Job variants={JobVar} initial="initial" animate="animate">
              FrontEnd
            </Job>
            <And variants={AndVar} initial="initial" animate="animate">
              &
            </And>
          </MiniBox>
          <MiniBox>
            <Job variants={JobVar} initial="initial" animate="animate">
              Publisher
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
          <H3>KISS, DRY, YAGNI</H3>
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
