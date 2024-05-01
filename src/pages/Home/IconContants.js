import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
const IconWarp = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;
const IconCon = styled.div`
  border: 1px solid #dbdbdb;
  padding: 20px;
  border-radius: 50%;
  svg {
    color: #535353;
    font-size: 24px;
  }
`;

export const IconContants = () => {
  return (
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
      <Link to={"/login"}>
        <IconCon>
          <LuUser2 />
        </IconCon>
      </Link>
    </IconWarp>
  );
};
