"use client";

import React, { ReactNode } from "react";

import { ResponseAnimePosts } from "@/types";

import AnimeCardContext from "./AnimeCardContext";

interface AnimeCardProps {
  data: ResponseAnimePosts;
  children: ReactNode;
}

const AnimeCard = (props: AnimeCardProps) => {
  const { data, children } = props;

  return (
    <AnimeCardContext.Provider value={{ anime: data }}>
      <div>{children}</div>
    </AnimeCardContext.Provider>
  );
};

export default AnimeCard;
