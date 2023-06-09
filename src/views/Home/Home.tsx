"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import concat from "lodash/concat";
import isEmpty from "lodash/isEmpty";
import { Inter } from "next/font/google";

import {
  AnimeCard,
  AnimeCardImage,
  AnimeCardTitle,
  Search,
} from "@/components";
import { api } from "@/services";
import { ResponseAnimePosts } from "@/types";

interface HomeProps {
  data: ResponseAnimePosts[];
}

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<HomeProps> = (props) => {
  const { data } = props;

  const { ref, inView } = useInView();

  const [searchValue, setSearchValue] = useState("");
  const [defaultData, setDefaultData] = useState<ResponseAnimePosts[]>(data);
  const [searchData, setSearchData] = useState<ResponseAnimePosts[]>([]);
  const [defaultPage, setDefaultPage] = useState(2);
  const [searchPage, setSearchPage] = useState(2);

  const dataResult = useMemo(() => {
    if (isEmpty(searchData)) {
      return defaultData;
    }
    return searchData;
  }, [defaultData, searchData]);

  const handleClearData = useCallback(() => {
    setSearchData([]);
    return setSearchPage(2);
  }, []);

  const onSubmitSearch = useCallback(async () => {
    const data = await api<ResponseAnimePosts[]>(
      `/api/search?tags=${searchValue}`
    );
    handleClearData();
    return setSearchData(data);
  }, [handleClearData, searchValue]);

  const onFetchPageDefaultData = useCallback(async () => {
    const data = await api<ResponseAnimePosts[]>(
      `/api/default-page?page=${defaultPage}`
    );
    return setDefaultData((prevValue) => concat(prevValue, data));
  }, [defaultPage]);

  const onFetchPageSearchData = useCallback(async () => {
    const data = await api<ResponseAnimePosts[]>(
      `/api/tags-page?tags=${searchValue}&page=${searchPage}`
    );
    return setSearchData((prevValue) => concat(prevValue, data));
  }, [searchPage, searchValue]);

  const handleInView = useCallback(() => {
    if (isEmpty(searchValue)) {
      setDefaultPage((prevValue) => prevValue + 1);
      return onFetchPageDefaultData();
    }

    setSearchPage((prevValue) => prevValue + 1);
    return onFetchPageSearchData();
  }, [onFetchPageDefaultData, onFetchPageSearchData, searchValue]);

  useEffect(() => {
    if (inView) {
      handleInView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <main
      className="px-5 md:px-10 lg:px-20 bg-[#2e2e36] py-5 min-h-screen"
      style={inter.style}
    >
      <h1 className="text-center font-semibold text-white text-3xl">
        AnimeBoard
      </h1>
      <div className="flex items-center justify-center py-5">
        <Search
          placeholder="Search Anime by Hashtag"
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={onSubmitSearch}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        {dataResult.map((anime, id) => (
          <AnimeCard key={id + anime.md5} data={anime}>
            <AnimeCardImage />
            <AnimeCardTitle />
          </AnimeCard>
        ))}
      </div>

      <div ref={ref} />
    </main>
  );
};

export default Home;
