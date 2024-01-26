import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BASE_URL } from "../../../../constants";
import { queryKeys } from "../../../../query/keys";
import axiosInter from "../../../../services/api";
import { Header } from "./style";

function Posts() {
  const { error, data, isLoading } = useQuery({
    queryKey: [queryKeys.postsKey],
    queryFn: () => axiosInter.get(BASE_URL + "/posts").then((res) => res.data),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  return (
    <>
      <Header>
        <img
          className="img1 block"
          src="https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Sumac-turkey-stuffed-pittas-73482d5.jpg?quality=90&resize=556,505"
          alt=""
        />
        <img
          className="img2 none"
          src="https://www.eatingwell.com/thmb/zSh86Cx-fybgBu5-baxombw1OiA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/diy-taco-lunch-box-54f8791776b64900b285fbfc22a4f0bc.jpg"
          alt=""
        />
      </Header>
      {data.map((item, id) => (
        <div key={id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </>
  );
}
export default Posts;