import axios from "axios";

const key =
  "oB0mv5kUrEdNaB5JWIAH4cWj3db03JdxoI1CnUjosn3FoCZ8Wj8QV3eSxyF8gLhcSXFGz1u%2Bw0hqdpfUqhItKQ%3D%3D";

const instance = axios.create({
  baseUrl: "https://apis.data.go.kr/B551011/GoCamping/basedList/",
  params: {
    serviceKey: key,
    numOfRows: 1,
    pageNo: 1,
    MobileOS: "WIN",
    _type: "json",
  },
});

export const getcamPing = ({ queryKey }) => {
  const [baseUrlapi] = queryKey;
  return instance.get(`${baseUrlapi}`).then((res) => res.data);
};
