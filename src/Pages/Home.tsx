import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
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
  box-sizing: border-box;
  padding: 0 60px;
  cursor: pointer;
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
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
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
        </Text>
      </First>
      {/* 첫페이지 */}
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Wrapper>
  );
};

export default Home;
