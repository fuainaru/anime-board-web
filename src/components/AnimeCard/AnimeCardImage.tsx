"use client";

import Image from "next/image";

import { useAnimeCardContext } from "./AnimeCardContext";

const AnimeCardImage = () => {
  const { anime } = useAnimeCardContext();

  return (
    <div className="relative w-full h-72">
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
