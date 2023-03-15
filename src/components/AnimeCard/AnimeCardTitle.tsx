"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// @ts-ignore
import IconLeft from "@iconscout/react-unicons/icons/uil-angle-left";
// @ts-ignore
import IconRight from "@iconscout/react-unicons/icons/uil-angle-right";

import { useAnimeCardContext } from "./AnimeCardContext";

const SCROLL_NUMBER = 100;

const AnimeCardTitle = () => {
  const { anime } = useAnimeCardContext();

  const ref = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const tags = useMemo(() => {
    return anime.tags.split(" ");
  }, [anime.tags]);

  const onCheckScrollEnd = useCallback(() => {
    if (ref.current) {
      const isScrollEnd =
        Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <=
        ref.current.offsetWidth;

      if (isScrollEnd) {
        return setScrollEnd(true);
      }

      return setScrollEnd(false);
    }
  }, []);

  const onScroll = useCallback(
    (shift: number) => {
      if (ref.current) {
        ref.current.scrollLeft += shift;
        setScrollX((prevValue) => prevValue + shift);

        return onCheckScrollEnd();
      }
    },
    [onCheckScrollEnd]
  );

  useEffect(() => {
    if (ref.current) {
      const isScrollEnd =
        ref.current && ref.current.scrollWidth === ref.current.offsetWidth;

      if (isScrollEnd) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    }

    return () => {};
  }, [ref.current?.scrollWidth, ref.current?.offsetWidth]);

  return (
    <div className="flex items-center justify-between my-3">
      {scrollX !== 0 ? (
        <div className="h-5 transition duration-700 ease-in-out">
          <IconLeft onClick={() => onScroll(-SCROLL_NUMBER)} color="#797981" />
        </div>
      ) : null}

      <div
        ref={ref}
        className="flex items-center gap-2 overflow-x-scroll scroll-smooth no-scrollbar"
        onScroll={onCheckScrollEnd}
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

      {!scrollEnd ? (
        <div className="h-5">
          <IconRight onClick={() => onScroll(+SCROLL_NUMBER)} color="#797981" />
        </div>
      ) : null}
    </div>
  );
};

export default AnimeCardTitle;
