import styled from "styled-components";
import { FaGithub, FaRegPaperPlane } from "react-icons/fa6";
const Image = styled.div<IImage>`
  border-radius: 20px;
  width: 55%;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  position: relative;
  background: url(${(props) => props.bg}) top;
  background-size: cover;
  transition: background-position ${(props) => props.timer + "s"} ease-in-out;
  order: ${(props) => (props.right === "true" ? -1 : 0)};
  &:hover {
    background-position: bottom;
  }
`;
const MyworkWrap = styled.div`
  margin: 50px 0;
  box-sizing: border-box;
  width: 950px;
  border-radius: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  gap: 2rem;
  &.text {
    position: relative;
    opacity: 0;
    top: 100px;
  }
  &.show {
    opacity: 1;
    top: 0;
    transition: all 1s;
  }
  .textbox {
    width: 40%;
    display: flex;
    flex-flow: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    order: -1;
    h3 {
      width: 100%;
    }
    p {
      text-align: center;
    }
    .skillbox {
      display: flex;
      gap: 0.8rem;
    }
  }
  .linkbox {
    display: flex;
    gap: 2rem;
  }
  @media (max-width: 1024px) {
    width: 570px;
  }
  @media (max-width: 570px) {
    width: 90%;
    flex-flow: column;
    padding: 50px 0;
    .textbox {
      width: 90%;
    }
    .webImage {
      width: 90%;
      order: -2;
    }
  }
`;
const Box = styled.div``;
type IImage = {
  bg: string;
  right: string;
  timer: number;
};

type IMywork = {
  source: {
    img: string;
    h3: string;
    p: string;
    skill: string[];
    github: string;
    right: boolean;
    timer: number;
    url: string;
  }[];
};
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: inherit;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;
const Img = styled.img`
  fill: #fff;
  height: 24px;
`;
const LinkBtn = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  align-items: center;
  gap: 4px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: none;
    scale: 1.2;
  }
  .icon {
    width: 16px;
    height: 16px;
  }
`;
const H5 = styled.p`
  color: ${(props) => props.theme.color.titleColorSoft};
`;
const Mywork = ({ source }: IMywork) => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const $target = e.target;

      // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤
      if (e.isIntersecting) {
        $target.classList.add("show");
      } else {
        $target.classList.remove("show");
      }
    });
  });

  // 옵저버할 대상을 선택하여 관찰 시작
  const $items = document.querySelectorAll(".text");
  $items.forEach((item) => {
    io.observe(item);
  });
  return (
    <>
      {source.map((item) => (
        <MyworkWrap key={item.h3} className="text">
          <Image
            className={"webImage"}
            right={`${item.right}`}
            bg={item.img}
            timer={item.timer}
          ></Image>
          <Box className="textbox">
            <H5 className="h3">{item.h3}</H5>
            <p>{item.p}</p>
            <div className="skillbox">
              {item.skill.map((skill) => (
                <Btn key={skill}>
                  <Img src={`/images/${skill}`} alt={skill}></Img>
                </Btn>
              ))}
            </div>
            <div className="linkbox">
              <LinkBtn onClick={() => window.open(item.github)}>
                Code <FaGithub className="icon" />
              </LinkBtn>
              <LinkBtn onClick={() => window.open(item.url)}>
                Visit Site <FaRegPaperPlane className="icon" />
              </LinkBtn>
            </div>
          </Box>
        </MyworkWrap>
      ))}
    </>
  );
};

export default Mywork;
