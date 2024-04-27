import { useQuery } from "@tanstack/react-query";
import { getbasedList, getsearchList } from "../../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IconContants } from "../Home/IconContants";

const Wrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 108px;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;
const Container = styled.div`
  min-height: 100vh;
  background-color: pink;
`;
const ImgWarp = styled.div``;

export const Detail = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const [submitdata, setsubmitData] = useState("");

  const { id } = useParams();

  console.log(id);
  const { data } = useQuery({
    queryKey: [`basedList`, compingQuery],
    queryFn: getbasedList,
  });

  const query = useQuery({
    queryKey: ["searchList", submitdata],
    queryFn: getsearchList,
  });
  // console.log(submitdata);

  const dataObj = data && data?.response?.body?.items?.item;
  console.log(dataObj && dataObj.filter((data) => data.contentId === id));

  return (
    <Wrap>
      <IconContants />
      <Container>
        <ImgWarp></ImgWarp>
      </Container>
    </Wrap>
  );
};
