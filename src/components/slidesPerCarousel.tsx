"use client";

import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: { url: string; id: number }[];
  options?: EmblaOptionsType;
};

export default function ThumbnailsCarousel({ slides, options }: PropType) {
  return (
    <div>
      <div>asd</div>
    </div>
  );
}
