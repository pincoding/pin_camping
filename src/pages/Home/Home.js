import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getbasedList, getsearchList } from "../../api";
import { imgUrl } from "../../components/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Sec01 } from "./Sec01";
import { Loding } from "../../components/Loding";
import { IconContants } from "./IconContants";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const Wrap = styled.div`
  max-width: 500px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 108px;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #e8eaf6;
`;

const ImgWarp = styled.div`
  padding: 0 20px;
`;
const Con = styled.div`
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Home = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const [mainData, setmainData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const { data } = useQuery({
    queryKey: ["basedList", compingQuery],
    queryFn: getbasedList,
  });
  const dataObj = data && data?.response?.body?.items?.item;
  // console.log(query && query?.data?.response?.body?.items?.item);
  console.log(data);
  console.log(dataObj);

  SwiperCore.use([Autoplay]);

  const params = {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
    },
  };

  return (
    <div>
      {loading ? (
        <Loding />
      ) : (
        <>
          <Wrap>
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

            <IconContants />

            <h1 style={{ marginLeft: "20px", fontSize: "18px" }}>추천캠핑</h1>
            <Sec01 condb={dataObj}></Sec01>
          </Wrap>
        </>
      )}
    </div>
  );
};
// scrollTo({
//   top : 0,
//   b : "smooth"
// })

// use로케이션 : 경로가 바뀌면
