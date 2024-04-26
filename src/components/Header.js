import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderS = styled.div`
  max-width: 500px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* backdrop-filter: blur(3px); */
  background-color: white;
  border-bottom: 1px solid #e1ebf1;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  a {
    font-weight: 700;
    font-size: 28px;
    color: black;
  }
`;
const Logo = styled.div`
  color: #0067a3;
  font-weight: 900;
`;

export const Header = () => {
  return (
    <HeaderS>
      <Link to={"/"}>
        <Logo>캠사캠핑</Logo>
      </Link>
    </HeaderS>
  );
};
