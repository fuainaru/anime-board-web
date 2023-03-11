"use client";

import Image from "next/image";

import { useAnimeCardContext } from "./AnimeCardContext";

const AnimeCardImage = () => {
  const { anime } = useAnimeCardContext();

  return (
    <div className="relative h-[20rem] w-[40rem]">
      <Image
        className="object-cover rounded-md"
        src={anime.sample_url}
        alt={anime.author}
        fill
      />
    </div>
  );
};

export default AnimeCardImage;
