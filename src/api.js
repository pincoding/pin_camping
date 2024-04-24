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

export const getbasedList = ({ queryKey }) => {
  const [basedList, _] = queryKey;
  return instance.get(basedList).then((res) => res.data);
};

export const getsearchList = ({ queryKey }) => {
  const [searchList, submitdata] = queryKey;
  return instance
    .get(`${searchList}?keyword=${"서울"}`)
    .then((res) => res.data);
};
