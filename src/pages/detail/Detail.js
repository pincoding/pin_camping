import { useQuery } from "@tanstack/react-query";
import { getbasedList, getsearchList } from "../../api";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { IconContants } from "../Home/IconContants";

const Wrap = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;
  padding-top: 108px;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;
const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  /* background-color: pink; */
`;
const ImgWarp = styled.div`
  height: 200px;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
`;
const TextWrap = styled.div`
  /* background-color: gray; */
  margin-top: 10px;
`;
const TextConWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0px;
  border-bottom: 1px solid #e3e0e0;
  word-break: keep-all;
`;
const TextLeft = styled.div`
  width: 30%;
  line-height: 30px;
  h1 {
    font-weight: 500;
    word-break: break-all;
  }
`;
const TextRight = styled.div`
  width: 70%;
  line-height: 30px;
  p {
    word-break: break-all;
    opacity: 0.7;
  }
`;
const BottomCon = styled.div`
  h1 {
    padding: 20px 0 10px 0;
    font-weight: 500;
  }
  p {
    line-height: 24px;
  }
`;

export const Detail = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const [submitdata, setsubmitData] = useState("");

  const { id } = useParams();
  const { doNm } = useParams();
  const loc = useLocation();
  // console.log(doNm)

  const DetailData = loc?.state?.result;
  console.log(DetailData);
  // const { data } = useQuery({
  //   queryKey: [`basedList`],
  //   queryFn: getbasedList,
  // });

  // const query = useQuery({
  //   queryKey: ["searchList", doNm],
  //   queryFn: getsearchList,
  // });

  // console.log(data);

  // const dataObj = data && data?.response?.body?.items?.item;
  // console.log(dataObj && dataObj.filter((data) => data.contentId === id));

  const TextDatas = [
    {
      id: 0,
      textname: "주소",
      textValue: DetailData?.addr1,
    },
    {
      id: 1,
      textname: "캠핑장환경",
      textValue: DetailData?.lctCl,
    },
    {
      id: 2,
      textname: "캠핑장유형",
      textValue: DetailData?.induty,
    },
    {
      id: 3,
      textname: "운영기간",
      textValue: DetailData?.operPdCl,
    },
    {
      id: 4,
      textname: "운영일",
      textValue: DetailData?.operDeCl,
    },
    {
      id: 5,
      textname: "홈페이지",
      textValue: <Link to={DetailData?.resveUrl}>사이트 방문하기</Link>,
    },
    {
      id: 6,
      textname: "예약방법",
      textValue: DetailData?.resveCl,
    },
    {
      id: 7,
      textname: "주변이용가능시설",
      textValue: DetailData?.themaEnvrnCl,
    },
    {
      id: 8,
      textname: "문의처",
      textValue: DetailData?.tel,
    },
  ];

  return (
    <Wrap>
      <IconContants />
      <Container>
        <ImgWarp>
          <img src={`${DetailData?.firstImageUrl}`}></img>
        </ImgWarp>
        <TextWrap>
          {TextDatas.map((data) => (
            <TextConWrap key={data.id}>
              <TextLeft>
                <h1>{data.textname}</h1>
              </TextLeft>
              <TextRight>
                <p>{data.textValue}</p>
              </TextRight>
            </TextConWrap>
          ))}
          <BottomCon>
            <h1>캠핑장소개</h1>
            <p>{DetailData?.featureNm}</p>
          </BottomCon>
        </TextWrap>
      </Container>
    </Wrap>
  );
};
