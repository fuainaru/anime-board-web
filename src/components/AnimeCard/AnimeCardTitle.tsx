"use client";

import { useCallback, useMemo, useRef } from "react";
// @ts-ignore
import IconLeft from "@iconscout/react-unicons/icons/uil-angle-left";
// @ts-ignore
import IconRight from "@iconscout/react-unicons/icons/uil-angle-right";

import { useAnimeCardContext } from "./AnimeCardContext";

const SCROLL_NUMBER = 100;

const AnimeCardTitle = () => {
  const { anime } = useAnimeCardContext();

  const ref = useRef<HTMLDivElement>(null);

  const tags = useMemo(() => {
    return anime.tags.split(" ");
  }, [anime.tags]);

  const onScrollLeft = useCallback(() => {
    if (ref.current) {
      ref.current.scrollLeft += -SCROLL_NUMBER;
    }
  }, []);

  const onScrollRight = useCallback(() => {
    if (ref.current) {
      ref.current.scrollLeft += +SCROLL_NUMBER;
    }
  }, []);

  return (
    <div className="flex items-center justify-between my-3">
      <IconLeft onClick={onScrollLeft} color="#797981" />

      <div
        ref={ref}
        className="flex items-center gap-2 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {tags.map((tag, id) => (
          <div
            key={id}
            className="py-1 px-3 bg-[#383840] text-white rounded-full"
          >
            <p className="text-xs break-all truncate">{tag}</p>
          </div>
        ))}
      </div>

      <IconRight
        onClick={onScrollRight}
        color="#797981"
        className="!w-36 !h-5"
      />
    </div>
  );
};

export default AnimeCardTitle;
