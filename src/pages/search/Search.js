import { useState } from "react";
import { Sec01 } from "../Home/Sec01";
import { useQuery } from "@tanstack/react-query";
import { getsearchList } from "../../api";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 400px;
  }
`;

const Form = styled.form``;

export const Search = () => {
  const [submitdata, setsubmitData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const campingHandler = (data) => {
    const { keyword } = data;
    setsubmitData(keyword);
  };

  const query = useQuery({
    queryKey: ["searchList", submitdata],
    queryFn: getsearchList,
  });

  const queryObj = query && query?.data?.response?.body?.items?.item;
  return (
    <Container>
      <Form onSubmit={handleSubmit(campingHandler)}>
        <input
          {...register("keyword", {
            required: "키워드를 입력해주세요",
          })}
          type="text"
          placeholder="입력하샘"
        ></input>
      </Form>

      <Sec01 ConDb={queryObj}></Sec01>
    </Container>
  );
};
