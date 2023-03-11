"use client";

import { createContext, useContext } from "react";

import { ResponseAnimePosts } from "@/types";

const AnimeCardContext = createContext<{ anime: ResponseAnimePosts } | null>(
  null
);

const useAnimeCardContext = () => {
  const context = useContext(AnimeCardContext);
  if (!context) {
    throw new Error(
      "useAnimeCardContext must be used within a AnimeCardProvider"
    );
  }
  return context;
};

export { AnimeCardContext, useAnimeCardContext };
export default AnimeCardContext;
