import { useQuery } from "@tanstack/react-query";
import { getbasedList, getsearchList } from "./api";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  height: 400px;
  background-color: teal;
`;

const Form = styled.form``;

const App = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const [submitdata, setsubmitData] = useState("");
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data } = useQuery({
    queryKey: ["basedList", compingQuery],
    queryFn: getbasedList,
  });

  const campingHandler = (data) => {
    const { keyword } = data;
    setsubmitData(keyword);
  };

  const query = useQuery({
    queryKey: ["searchList", submitdata],
    queryFn: getsearchList,
  });
  console.log(data);
  // console.log(query);

  return (
    <Container>
      <Form onSubmit={handleSubmit(campingHandler)}>
        <input
          {...register("keyword", {
            required: "키워드릴 입력해주세요",
          })}
          type="text"
          placeholder="입력하샘"
        ></input>
      </Form>
      <h1>{submitdata && submitdata}</h1>
    </Container>
  );
};

export default App;
// 기본 캠핑 주소 위치 불러오기 기능 끝
// 검색후 키워드 기능 끝
