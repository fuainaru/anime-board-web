"use client";

import { useAnimeCardContext } from "./AnimeCardContext";

const AnimeCardTitle = () => {
  const { anime } = useAnimeCardContext();
  const splitTags = anime.tags.split(" ");
  const sliceTags = splitTags.slice(0, 3);

  return (
    <div className="flex items-center gap-2 overflow-hidden my-3">
      {sliceTags.map((tag, id) => (
        <div
          key={id}
          className="py-1 px-3 bg-[#383840] text-white rounded-full"
        >
          <p className="text-xs">{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimeCardTitle;
