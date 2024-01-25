import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BASE_URL } from "../../../../constants";
import { queryKeys } from "../../../../query/keys";
import axiosInter from "../../../../services/api";

function Posts() {
  const { error, data, isLoading } = useQuery({
    queryKey: [queryKeys.postsKey],
    queryFn: () => axiosInter.get(BASE_URL + "/posts").then((res) => res.data),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  return (
    <>
      {data.map((item, id) => (
        <div key={id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </>
  );
}

export default Posts;
