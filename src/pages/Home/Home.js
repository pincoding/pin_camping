import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getbasedList, getsearchList } from "../../api";
import { imgUrl } from "../../components/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Wrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;
const Header = styled.div`
  height: 70px;
  background-color: yellow;
`;
const Logo = styled.div``;

const Container = styled.div`
  min-height: 100vh;
  background-color: teal;
  img {
    width: 100%;
    height: 400px;
  }
`;

const Form = styled.form``;

const ImgWarp = styled.div``;
const Con = styled.div``;
const OutImg = styled.div``;

export const Home = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const [submitdata, setsubmitData] = useState("");
  const [mainData, setmainData] = useState();
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

  const params = {
    spaceBetween: 20,
    slidesPerView: 1,
    autoPlay: {
      delay: 1000,
    },
  };
  const dataObj = data && data?.response?.body?.items?.item;
  console.log(dataObj);

  return (
    <Wrap>
      <Header>
        <Logo>Pin_camping</Logo>
      </Header>
      {/*  */}
      <ImgWarp>
        <Swiper {...params}>
          {imgUrl.map((data) => (
            <SwiperSlide key={data.id}>
              <img src={data.imgUrl} alt={data.imgNmae}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </ImgWarp>
      {/*  */}
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
        <h1>{submitdata && submitdata}</h1>

        <OutImg></OutImg>
      </Container>
      {/*  */}
    </Wrap>
  );
};
