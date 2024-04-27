import axios from "axios";

const key =
  "oB0mv5kUrEdNaB5JWIAH4cWj3db03JdxoI1CnUjosn3FoCZ8Wj8QV3eSxyF8gLhcSXFGz1u+w0hqdpfUqhItKQ==";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/B551011/GoCamping",
  params: {
    serviceKey: key,
    MobileOS: "WIN",
    MobileApp: "comgpin",
    _type: "json",
  },
});

const kakoKey = "bcfd4a8c9041cb3b3916cb8d3429b320";
const kakaoMap = axios.create({
  baseURL: `https://dapi.kakao.com/v2/local/search/address.`,
  headers: {
    Authorization: `KakaoAK ${kakoKey}`,
  },
});

export const getbasedList = ({ queryKey }) => {
  const [basedList, _] = queryKey;
  return instance.get(`${basedList}`).then((res) => res.data);
};

export const getsearchList = ({ queryKey }) => {
  const [searchList, submitdata] = queryKey;

  return instance
    .get(`${searchList}?keyword=${submitdata}`)
    .then((res) => res.data);
};
