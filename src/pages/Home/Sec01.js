import { Link } from "react-router-dom";
import styled from "styled-components";

const OutImg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
`;
const OutCon = styled.div`
  /* border: 1px solid #e8eaf6; */
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
`;

export const Sec01 = ({ ConDb }) => {

  return (
    <OutImg>
      {ConDb &&
        ConDb.map((data) => (
          // console.log(data.contentId)
          
          <Link key={data.contentId} to={`/detail/${data.doNm}/${data.contentId}`} state={{result:data}}>
            <OutCon>
              <BoxImg>
                <img src={data.firstImageUrl} alt={data.facltNm}></img>
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
