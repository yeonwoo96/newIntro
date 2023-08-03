import { styled } from "styled-components";
// import { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Nav = styled(motion.div)`
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  backdrop-filter: blur(10px);
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px 60px;
  justify-content: space-between;
  p {
    position: fixed;
    background-color: #000;
  }
`;
const Left = styled.ul`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;
const Logo = styled.span`
  font-size: 20px;
`;
const Right = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const Line = styled.div`
  height: 2px;
  width: 98vw;
  background: rgba(201, 169, 169, 0.3);
`;
const LocationBar = styled(motion.div)`
  height: 2px;
  background: #e03d3d;
`;

const NavVar = {
  initial: {
    top: -68,
  },
  animate: {
    top: 0,
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
};
const PageBtn = styled(motion.li)``;
const PageBtnVar = {
  hover: {
    textDecoration: "line-through 1px #fff",
  },
};
const Header = () => {
  const onClick = (y: number) => {
    window.scrollTo({ top: y, left: 0, behavior: "smooth" });
  };
  console.log(onClick);
  // 페이지 이동 이벤트
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <Nav variants={NavVar} initial="initial" animate="animate">
      <Wrapper>
        <Left>
          <li>
            <Logo className="pacifico">Dev.Shin</Logo>
          </li>
          <li>FrontEnd Developer/Publisher</li>
        </Left>
        <Right>
          <PageBtn variants={PageBtnVar} whileHover="hover">
            works,
          </PageBtn>
          <PageBtn variants={PageBtnVar} whileHover="hover">
            about,
          </PageBtn>
          <PageBtn variants={PageBtnVar} whileHover="hover">
            contact
          </PageBtn>
        </Right>
      </Wrapper>
      <Line>
        <LocationBar style={{ width }}></LocationBar>
      </Line>
    </Nav>
  );
};

export default Header;
