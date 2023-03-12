"use client";

import { useCallback, useState } from "react";
import { Inter } from "next/font/google";

import {
  AnimeCard,
  AnimeCardImage,
  AnimeCardTitle,
  Search,
} from "@/components";
import { ResponseAnimePosts } from "@/types";

interface HomeProps {
  data: ResponseAnimePosts[];
}

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<HomeProps> = (props) => {
  const { data } = props;

  const [search, setSearch] = useState("");

  const onSubmitSearch = useCallback(() => {
    console.log(search);
  }, [search]);

  return (
    <main className="px-20 bg-[#2e2e36]" style={inter.style}>
      <div className="py-5">
        <Search
          placeholder="Search Anime by Hashtag"
          value={search}
          onChange={setSearch}
          onSubmit={onSubmitSearch}
        />
      </div>

      <div className="grid grid-cols-3 gap-x-5">
        {data.map((anime, id) => (
          <AnimeCard key={id} data={anime}>
            <AnimeCardImage />
            <AnimeCardTitle />
          </AnimeCard>
        ))}
      </div>
    </main>
  );
};

export default Home;
