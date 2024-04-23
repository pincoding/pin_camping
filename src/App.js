import { useQuery } from "@tanstack/react-query";
import { getcamPing } from "./api";
import { useState } from "react";

const App = () => {
  const [compingQuery, setcompingQuery] = useState("");
  const query = useQuery({
    queryKey: ["baseUrlapi", compingQuery],
    queryFn: getcamPing,
  });
  console.log(query);
  return <div>왜! 왜!!!!!!!!!!!!!!! 안나와!!!!!!!!!!!!!!!!!!!</div>;
};

export default App;
