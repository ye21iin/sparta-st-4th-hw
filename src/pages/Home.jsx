import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home 컴포넌트</h1>
      <Link to="/detail">Detail 페이지로 이동하기</Link>
    </div>
  );
};

export default Home;
