import { motion } from "framer-motion";
import { styled } from "styled-components";
import React from "react";

const Box = styled.div`
  display: flex;
  flex-flow: column;
`;

const First = styled.div`
  box-sizing: border-box;
  padding: 20vh 60px 60px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: end;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  @media (max-width: 500px) {
    padding: 20vh 0 60px;
    flex-flow: column;
    align-items: center;
    justify-content: normal;
    gap: 5rem;
  }
  @media (max-width: 1100px) {
    flex-flow: column;
  }
  /* pointer-events: none; */
  .left {
    display: flex;
    flex-flow: column;
    align-content: center;
    box-sizing: border-box;
    position: relative;
  }
  .right {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    text-align: right;
    @media (max-width: 500px) {
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
  vertical-align: text-bottom;
  line-height: 1;
  letter-spacing: 0.03em;
  font-size: 200px;
  position: relative;

  span {
    position: absolute;
    right: -30px;
    bottom: 26px;
    font-size: 80px;
  }
  @media (max-width: 1060px) {
    font-size: 120px;
    span {
      font-size: 50px;
      right: -20px;
      bottom: 22px;
    }
  }
  @media (max-width: 460px) {
    font-size: 100px;
    span {
      font-size: 40px;
      right: -24px;
      bottom: 22px;
    }
  }
`;
const MiniBox = styled.div`
  display: flex;
  align-items: flex-end;
  &:first-child {
    margin-bottom: 20px;
  }
`;
const Span = styled(motion.span)`
  position: absolute;
  bottom: 0;
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
const Introduce = styled(motion.span)`
  white-space: nowrap;
  font-size: 28px;

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
  margin-bottom: 20px;
`;

const Firstpage = React.forwardRef<HTMLDivElement>((props, ref) => {
  // console.log(props);
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
