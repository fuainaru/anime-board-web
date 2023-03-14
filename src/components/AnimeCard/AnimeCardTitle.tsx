"use client";

import { useAnimeCardContext } from "./AnimeCardContext";

const AnimeCardTitle = () => {
  const { anime } = useAnimeCardContext();
  const tags = anime.tags.split(" ");
  const tagsSplit = tags.slice(0, 3);

  return (
    <div className="flex items-center gap-2 overflow-hidden my-3">
      {tagsSplit.map((tag, id) => (
        <div
          key={id}
          className="py-1 px-3 bg-[#383840] text-white rounded-full"
        >
          <p className="text-xs break-all truncate">{tag}</p>
        </div>
      ))}

      {tags.length > 3 ? (
        <div className="py-1 px-3 bg-[#383840] text-white rounded-full">
          <p className="text-xs break-all truncate">+{tags.length - 3}</p>
        </div>
      ) : null}
    </div>
  );
};

export default AnimeCardTitle;
