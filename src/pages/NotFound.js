import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 108px;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 28px;
  padding-bottom: 100px;
  h1 {
    color: black;
  }
`;
const Button = styled.div`
  width: 200px;
  height: 40px;
  margin-top: 60px;
  font-size: 18px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0067a3;
  color: white;
`;
export const NotFound = () => {
  return (
    <Wrap>
      <Helmet>
        <title>Notfound 404</title>
      </Helmet>
      <Container>
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/162/540/non_2x/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg"
          alt="404notfound"
        ></img>
        <h1 style={{ color: "#ef452e" }}>페이지를 찾을수 없습니다.</h1>
        <Link to={"/"}>
          <Button>홈으로 돌아가기</Button>
        </Link>
      </Container>
    </Wrap>
  );
};
