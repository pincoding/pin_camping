import { useQuery } from "@tanstack/react-query";
import { getbasedList } from "../../api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [compingQuery, setcompingQuery] = useState("");

  const { id } = useParams();
  console.log(id);
  const { data } = useQuery({
    queryKey: [`basedList`, compingQuery],
    queryFn: getbasedList,
  });
  const dataObj = data && data?.response?.body?.items?.item;

  console.log(dataObj && dataObj.filter((data) => data.contentId === id));

  return <div>Detail</div>;
};
