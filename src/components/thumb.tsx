import Image from "next/image";

type PropType = {
  selected: boolean;
  index: number;
  url: string;
  onClick: () => void;
};

export default function Thumb({ selected, url, index, onClick }: PropType) {
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
