import { styled } from "styled-components";
import React from "react";

const Second = styled.div`
  margin-top: 300px;
  position: relative;
  height: 100vh;
`;
const Wrapper = styled.div``;
const SecondPage = React.forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  return (
    <Second ref={ref}>
      <Wrapper></Wrapper>
    </Second>
  );
});

export default SecondPage;
