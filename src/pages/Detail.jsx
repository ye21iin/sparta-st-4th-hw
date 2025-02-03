import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h1>Detail 컴포넌트</h1>
      <span>현재 페이지 번호 :{params.id}</span>
    </div>
  );
};

export default Detail;
