"use client";

import { useState } from "react";
import Image from "next/image";

import { useAnimeCardContext } from "./AnimeCardContext";

const AnimeCardImage = () => {
  const { anime } = useAnimeCardContext();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-72">
      {isLoading ? (
        <div className="bg-[#383840] animate-pulse h-72 rounded-lg" />
      ) : null}

      <Image
        className="object-cover rounded-md cursor-pointer"
        src={anime.sample_url}
        alt={anime.file_url}
        onLoadingComplete={() => setIsLoading(false)}
        onClick={() => window.open(anime.sample_url, "_blank")}
        fill
      />
    </div>
  );
};

export default AnimeCardImage;
