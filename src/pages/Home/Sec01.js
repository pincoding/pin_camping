import { Link } from "react-router-dom";
import styled from "styled-components";

const OutImg = styled.div`
  background-color: gray;
`;
const OutCon = styled.div``;
const BoxImg = styled.div`
  height: 200px;
  overflow: hidden;
  img {
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
`;
const TextConOne = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  line-height: 24px;
`;
const TextConTwo = styled.div``;
const TextBoxleft = styled.div``;
const ConBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Sec01 = ({ ConDb }) => {
  return (
    <OutImg>
      {ConDb &&
        ConDb.map((data) => (
          <Link to={`/detail/${data.contentId}`}>
            <OutCon key={data.contentId}>
              <BoxImg>
                <img src={data.firstImageUrl} alt={data.facltNm}></img>
              </BoxImg>
              <TextConOne>
                <TextBoxleft>
                  <h1>{data.facltNm}</h1>
                  <ConBox>
                    <p>{data.addr1}</p>
                  </ConBox>
                </TextBoxleft>
              </TextConOne>
              <TextConTwo></TextConTwo>
            </OutCon>
          </Link>
        ))}
    </OutImg>
  );
};
