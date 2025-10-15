type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export default function Thumb({ selected, index, onClick }: PropType) {
  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}>
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number">
        {index + 1}
      </button>
    </div>
  );
}
