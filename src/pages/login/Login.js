import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;
const Form = styled.form`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;

  h1 {
    font-size: 40px;
    font-weight: 900;

    margin-bottom: 80px;
  }
  input {
    all: unset;
    width: 80%;
    border: 1px solid #ddd;
    margin-top: 14px;
    padding: 10px 15px;
    border-radius: 20px;
  }
`;
const Button = styled.button`
  all: unset;
  width: 80%;
  margin-top: 30px;
  padding: 13px 15px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) => props.$bg};
  cursor: ${(props) => props.$cur};
`;
//
const Errors = styled.div`
  width: 80%;
  padding-top: 5px;
  color: salmon;
`;

export const Login = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitHandler = () => {
    console.log("작동");
    if (isValid === true) {
      nav("/", {
        replace: true,
      });
    }
  };
  console.log();
  console.log(errors?.userpassword?.message);
  return (
    <Wrap>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>LOGIN</h1>
        <input
          {...register("username", {
            required: "아이디를 입력하세요",
            minLength: {
              value: 2,
              message: "아이디는 2자리 이상 입니다.",
            },
          })}
          type="text"
          placeholder="아이디를 입력해주세요."
        />
        <Errors>{errors?.username?.message}</Errors>
        <input
          {...register("userpassword", {
            required: "비밀번호 입력하세요",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <Errors>{errors?.userpassword?.message}</Errors>

        <Button
          $bg={isValid ? "#7bbdff" : ""}
          $cur={isValid ? "default" : "not-allowed"}
        >
          로그인
        </Button>
      </Form>
    </Wrap>
  );
};
