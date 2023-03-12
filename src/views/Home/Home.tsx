"use client";

import { useCallback, useMemo, useState } from "react";
import isEmpty from "lodash/isEmpty";
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

  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState<ResponseAnimePosts[]>([]);

  const dataResult = useMemo(() => {
    if (isEmpty(searchData)) {
      return data;
    }
    return searchData;
  }, [data, searchData]);

  const onSubmitSearch = useCallback(async () => {
    const response = await fetch("/api/search?tags=" + searchValue);
    const data: ResponseAnimePosts[] = await response.json();
    console.log(data);
    return setSearchData(data);
  }, [searchValue]);

  return (
    <main className="px-20 bg-[#2e2e36]" style={inter.style}>
      <div className="flex items-center justify-center py-5">
        <Search
          placeholder="Search Anime by Hashtag"
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={onSubmitSearch}
        />
      </div>

      <div className="grid grid-cols-3 gap-x-5">
        {dataResult.map((anime) => (
          <AnimeCard key={anime.id} data={anime}>
            <AnimeCardImage />
            <AnimeCardTitle />
          </AnimeCard>
        ))}
      </div>
    </main>
  );
};

export default Home;
