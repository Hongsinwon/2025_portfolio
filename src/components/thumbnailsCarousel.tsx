"use client";

import { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import style from "./thumbnailsCarousel.module.css";
import Image from "next/image";

type SlidesPropType = {
  slides: { url: string; id: number }[];
  options?: EmblaOptionsType;
};

type ThumbPropType = {
  selected: boolean;
  index: number;
  url: string;
  onClick: () => void;
};

function Thumb({ selected, url, index, onClick }: ThumbPropType) {
  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}>
      <button onClick={onClick} type="button">
        <Image
          src={url}
          alt={`민턴인 리뉴얼 기획서 썸네일 ${index}`}
          priority
          width={250}
          height={500}
        />
      </button>
    </div>
  );
}

export default function ThumbnailsCarousel({
  slides,
  options,
}: SlidesPropType) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={style.embla}>
      <div className={style.viewport} ref={emblaMainRef}>
        <div className={style.emblaContainer}>
          {slides.map((data, index) => (
            <div className={style.emblaSlide} key={index}>
              <Image
                src={data.url}
                alt={`민턴인 리뉴얼 기획서 ${index}`}
                width={1000}
                height={1000}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className={style.emblaThumbsViewport} ref={emblaThumbsRef}>
          <div className={style.emblaThumbsContainer}>
            {slides.map((data, index) => (
              <Thumb
                key={index}
                url={data.url}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
