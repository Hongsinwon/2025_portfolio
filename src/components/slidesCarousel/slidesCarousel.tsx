"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import usePrevNextButtons, {
  NextButton,
  PrevButton,
} from "./emblaCarouselArrowButtons";
import Image from "next/image";
import style from "./slidesCarousel.module.css";

type SlidesPropType = {
  slides: { url: string; id: number }[];
  options?: EmblaOptionsType;
};

export default function SliderCarousel({ slides, options }: SlidesPropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div>
      <section className={style.embla}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className={style.emblaViewport} ref={emblaRef}>
          <div className={style.emblaContainer}>
            {slides.map((data, index) => (
              <div className={style.emblaSlide} key={index}>
                <Image
                  src={data.url}
                  alt={`민턴인 리뉴얼 기획서 썸네일 ${index + 1}`}
                  priority
                  width={400}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </section>
    </div>
  );
}
