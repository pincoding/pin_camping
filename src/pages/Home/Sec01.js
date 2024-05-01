import { Link } from "react-router-dom";
import styled from "styled-components";

const OutImg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
`;
const OutCon = styled.div`
  height: 260px;
`;
const BoxImg = styled.div`
  height: 200px;
  overflow: hidden;
  padding: 10px;
  img {
    object-fit: cover;
    height: 100%;
    border-radius: 10px;
  }
`;
const TextCon = styled.div`
  line-height: 24px;
  margin-left: 10px;
  h1 {
    font-weight: 500;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;
const NotImg = "https://cdn-icons-png.flaticon.com/512/259/259987.png";
// 예외 처리 이미지
export const Sec01 = ({ condb }) => {
  return (
    <OutImg>
      {condb &&
        condb.map((data) => (
          <Link
            key={data.contentId}
            to={`/detail/${data.doNm}/${data.contentId}`}
            // data.doNm(해당지역명) / contentId(아이디값)
            state={{ result: data }}
          >
            {/* state 안에 result 객체에 data값을 저장한다. 이후 불러오기 원하는 페이지에서 useLocation 사용*/}
            <OutCon>
              <BoxImg>
                <img
                  src={data.firstImageUrl ? data.firstImageUrl : NotImg}
                  alt={data.facltNm}
                ></img>
              </BoxImg>
              <TextCon>
                <h1>{data.facltNm}</h1>
                <p>{data.addr1.slice(0, 16)}...</p>
              </TextCon>
            </OutCon>
          </Link>
        ))}
    </OutImg>
  );
};
//
