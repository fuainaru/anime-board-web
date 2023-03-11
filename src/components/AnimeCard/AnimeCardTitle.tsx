"use client";

import { Fragment } from "react";

import { useAnimeCardContext } from "./AnimeCardContext";

const AnimeCardTitle = () => {
  const { anime } = useAnimeCardContext();

  const splitTags = anime.tags.split(" ");
  const sliceTags = splitTags.slice(0, 3);

  return (
    <div className="w-[40rem]">
      {sliceTags.map((tag, id) => (
        <span
          key={id}
          className="text-xs text-white bg-slate-400 rounded-md p-3 m-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
  // return <p className="w-[40rem] truncate">{anime.tags}</p>;
};

export default AnimeCardTitle;
