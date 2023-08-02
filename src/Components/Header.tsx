import { styled } from "styled-components";
// className="pacifico"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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
const Header = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(width);
  });
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
          <li>works,</li>
          <li>about,</li>
          <li>contact</li>
        </Right>
      </Wrapper>
      <Line>
        <LocationBar style={{ width }}></LocationBar>
      </Line>
    </Nav>
  );
};

export default Header;
