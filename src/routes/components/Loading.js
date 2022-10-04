import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

const Loading = () => {
  //lottie

  const container = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/animations/loading.json"),
    });
  }, []);

  return (
    <Container>
      <NoMore ref={container}></NoMore>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const NoMore = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  margin: 0 auto;
  z-index: 1000;
`;

export default Loading;
