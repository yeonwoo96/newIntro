import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Firstpage from "./First";
import SecondPage from "./Second";
import Header from "../Components/Header";
import Projects from "./Projects";
import Footer from "./Footer";
import Study from "./study";
import Contacts from "./Contacts";
const Wrapper = styled(motion.div)`
  overflow-y: hidden;
  position: absolute;
  top: 0;
`;
const Banner = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: -10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  transition: all 0s;
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
  const firstPageRef = useRef<HTMLDivElement>(null);
  const secondPageRef = useRef<HTMLDivElement>(null);
  const ProjectsPageRef = useRef<HTMLDivElement>(null);
  const ContactsPageRef = useRef<HTMLDivElement>(null);
  const [firstPageY, setFirstPageY] = useState<number>(0);
  const [secondPageY, setSecondPageY] = useState<number>(0);
  const [ProjectsPageY, setProjectsPageY] = useState<number>(0);
  const [ContactsPageY, setContactsPageY] = useState<number>(0);

  useEffect(() => {
    if (firstPageRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setFirstPageY(firstPageRef.current.offsetTop);
    }

    if (secondPageRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setSecondPageY(secondPageRef.current.offsetTop - 100);
    }
    if (ProjectsPageRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setProjectsPageY(ProjectsPageRef.current.offsetTop - 100);
    }
    if (ContactsPageRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setContactsPageY(ContactsPageRef.current.offsetTop - 100);
    }
    console.log(secondPageY);
  }, [firstPageY, secondPageY, ProjectsPageY, ContactsPageY]);
  // y좌표 구하기
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  // 페이지 새로고침시 맨상단으로
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      `linear-gradient(rgba(19, 19, 19, 0.4), rgba(19, 19, 19, 0.4)),
  url("https://bepatrickdavid.com/images/herobg-hd.webp") no-repeat 50% fixed `,
      `linear-gradient(rgba(19, 19, 19, 1), rgba(19, 19, 19, 1)),
  url("https://bepatrickdavid.com/images/herobg-hd.webp") no-repeat 50% fixed `,
      `linear-gradient(rgba(19, 19, 19, 1), rgba(19, 19, 19, 1)),
  url("https://bepatrickdavid.com/images/herobg-hd.webp") no-repeat 50% fixed `,
      `linear-gradient(rgba(19, 19, 19, 0.8), rgba(19, 19, 19, 0.4)),
  url("https://bepatrickdavid.com/images/herobg-hd.webp") no-repeat 50% fixed `,
    ]
  );
  return (
    <Wrapper>
      <Header
        firstPageY={firstPageY}
        secondPageY={secondPageY}
        ProjectsPageY={ProjectsPageY}
        ContactsPageY={ContactsPageY}
      />
      <Banner
        variants={BannerVar}
        style={{ background }}
        initial="initial"
        animate="animate"
      />
      <Firstpage ref={firstPageRef} />
      <SecondPage ref={secondPageRef} />
      <Study />
      <Projects ref={ProjectsPageRef} />
      <Contacts ref={ContactsPageRef} />
      <Footer />
      <Wrapper />
    </Wrapper>
  );
};

export default Home;
