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
  border: none;
  color: #181818;
  font-weight: 500;
  padding: 5px 10px;
  background: #fff;
  font-size: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const LinkBtn = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #181818;
  align-items: center;
  gap: 4px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: #181818;
    color: #fff;
  }
  .icon {
    width: 16px;
    height: 16px;
  }
`;
const Mywork = ({ source }: IMywork) => {
  return (
    <>
      {source.map((item) => (
        <MyworkWrap key={item.h3}>
          <Image
            className={"webImage"}
            right={`${item.right}`}
            bg={item.img}
            timer={item.timer}
          ></Image>
          <Box className="textbox">
            <h3>{item.h3}</h3>
            <p>{item.p}</p>
            <div className="skillbox">
              {item.skill.map((skill, index) => (
                <Btn key={index}>{skill}</Btn>
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
