import { useState } from "react";
import { Sec01 } from "../Home/Sec01";
import { useQuery } from "@tanstack/react-query";
import { getsearchList } from "../../api";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IconContants } from "../Home/IconContants";
import { SiContentstack } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const Wrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;

const Container = styled.div``;

const Form = styled.form`
  padding: 20px 30px 20px 20px;
  input {
    all: unset;
    width: 100%;
    border-bottom: 1px solid #666;
    padding: 5px;
  }
`;
const Errors = styled.div`
  /* width: 80%; */
  padding-top: 5px;
  margin-left: 5px;
  font-size: 14px;
  color: salmon;
`;

const BooleanBox = styled.div`
  text-align: center;
`;
export const Search = () => {
  const [submitdata, setsubmitData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const campingHandler = (data) => {
    const { keyword } = data;
    setsubmitData(keyword);
  };

  const queryValue = useQuery({
    queryKey: ["searchList", submitdata],
    queryFn: getsearchList,
  });

  const queryObj = queryValue && queryValue?.data?.response?.body?.items?.item;
  console.log(queryObj);
  return (
    <Wrap style={{ paddingTop: "100px" }}>
      <Helmet>
        <title>검색페이지</title>
      </Helmet>
      <Container>
        <IconContants />

        <Form onSubmit={handleSubmit(campingHandler)}>
          <input
            {...register("keyword", {
              required: "키워드를 입력해주세요",
            })}
            type="text"
            placeholder="지역을 검색해주세요"
          ></input>
          <Errors>{errors?.keyword?.message}</Errors>
        </Form>
        {queryObj && queryObj.length > 0 ? (
          <Sec01 condb={queryObj}></Sec01>
        ) : (
          <BooleanBox>데이터가 없습니다.😢</BooleanBox>
        )}
      </Container>
    </Wrap>
  );
};
