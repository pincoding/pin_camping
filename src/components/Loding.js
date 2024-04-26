import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
`;

export const Loding = () => {
  return (
    <Container>
      <PuffLoader />
    </Container>
  );
};
