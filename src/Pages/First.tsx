import { motion } from "framer-motion";
import { styled } from "styled-components";

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
  /* pointer-events: none; */
  .left {
    box-sizing: border-box;
    padding-top: 55vh;
  }
  .right {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    padding-bottom: 80px;
  }
`;
const Introduce = styled(motion.span)`
  font-size: 28px;
`;
const IntroduceVar = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
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
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 2,
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
  font-size: 140px;
  font-weight: 600;
`;
const Job = styled(motion.h2)`
  line-height: 1;
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

const Firstpage = () => {
  return (
    <First>
      <Text className="left">
        <H4 className="pacifico">Lazy Developer</H4>
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
};

export default Firstpage;
