import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getbasedList, getsearchList } from "../../api";
import { imgUrl } from "../../components/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Sec01 } from "./Sec01";
//아이콘
import { AiOutlineHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
//아이콘

const Wrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;
const Header = styled.div`
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-weight: 700;
    font-size: 28px;
    /* color: #98bbeb; */
    color: black;
  }
`;
const Logo = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: teal;
  padding: 20px;
  img {
    width: 100%;
    height: 400px;
  }
`;

const ImgWarp = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;
const Con = styled.div`
  height: 140px;
  overflow: hidden;
  border-radius: 12px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

// 이미지 컨텐츠

//아이콘

const IconWarp = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  /* background-color: blue; */
`;
const IconCon = styled.div`
  background-color: #98bbeb;
  padding: 14px;
  border-radius: 50%;
  svg {
    color: white;
    font-size: 24px;
  }
`;
export const Home = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const [mainData, setmainData] = useState();

  const { data } = useQuery({
    queryKey: ["basedList", compingQuery],
    queryFn: getbasedList,
  });
  const dataObj = data && data?.response?.body?.items?.item;
  // console.log(query && query?.data?.response?.body?.items?.item);

  console.log(dataObj);
  const params = {
    spaceBetween: 20,
    slidesPerView: 1,
    autoPlay: {
      delay: 1000,
    },
  };

  return (
    <Wrap>
      <Header>
        <Link>
          <Logo>캠사캠핑</Logo>
        </Link>
      </Header>
      {/*  */}
      <ImgWarp>
        <Swiper {...params}>
          {imgUrl.map((data) => (
            <SwiperSlide key={data.id}>
              <Con>
                <img src={data.imgUrl} alt={data.imgNmae}></img>
              </Con>
            </SwiperSlide>
          ))}
        </Swiper>
      </ImgWarp>

      <IconWarp>
        <Link to={"/"}>
          <IconCon>
            <AiOutlineHome />
          </IconCon>
        </Link>
        <Link to={"/search"}>
          <IconCon>
            <IoSearch />
          </IconCon>
        </Link>
        <IconCon>
          <IoMdLogIn />
        </IconCon>
        <IconCon>
          <AiOutlinePicture />
        </IconCon>
      </IconWarp>

      <Container>
        <Sec01 ConDb={dataObj}></Sec01>
      </Container>
    </Wrap>
  );
};
