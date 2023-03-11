import { Inter } from "next/font/google";

import {
  AnimeCard,
  AnimeCardImage,
  AnimeCardTitle,
} from "@/components/AnimeCard";
import { API_URL } from "@/constants";
import { ResponseAnimePosts } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const getAnimePosts = async () => {
  const response = await fetch(API_URL + "/post.json?page=2", {
    cache: "no-store",
  });
  const data: ResponseAnimePosts[] = await response.json();
  return data;
};

const Page = async () => {
  const anime = await getAnimePosts();

  return (
    <main className="px-20 bg-[#2e2e36]" style={inter.style}>
      <h1 className="text-white font-semibold text-4xl">Anime Board</h1>
      <div className="flex flex-wrap gap-3 justify-between">
        {anime.map((data, id) => (
          <AnimeCard key={id} data={data}>
            <AnimeCardImage />
            <AnimeCardTitle />
          </AnimeCard>
        ))}
      </div>
    </main>
  );
};

export default Page;
