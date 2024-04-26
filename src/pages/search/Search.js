import { useState } from "react";
import { Sec01 } from "../Home/Sec01";
import { useQuery } from "@tanstack/react-query";
import { getsearchList } from "../../api";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;

const Container = styled.div``;

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
    <Wrap style={{ paddingTop: "100px" }}>
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
    </Wrap>
  );
};
