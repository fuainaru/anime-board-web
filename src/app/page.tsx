import { API_URL } from "@/constants";
import { ResponseAnimePosts } from "@/types";
import { Home } from "@/views";

const getAnimePosts = async () => {
  const response = await fetch(API_URL + "/post.json?page=1", {
    cache: "no-store",
  });
  const data: ResponseAnimePosts[] = await response.json();
  return data;
};

const Page = async () => {
  const anime = await getAnimePosts();

  return <Home data={anime} />;
};

export default Page;
