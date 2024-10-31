interface Props {
  imgUrl?: string;
  containerClassNames?: string;
  imgClassNames?: string;
  title?: string;
  description?: string;
  onCardClick?: () => void;
}

const ProductCard = ({
  imgUrl,
  onCardClick = () => null,
  title,
  description,
  imgClassNames = "",
  containerClassNames = "",
}: Props) => {
  return (
    <div
      className={`m-3 text-center ${containerClassNames}`}
      onClick={onCardClick}
    >
      {imgUrl ? (
        <img
          style={{ width: "100px" }}
          src={imgUrl}
          className={`img-fluid m-2 p-2 ${imgClassNames}`}
        />
      ) : null}

      {title ? <h3>{title}</h3> : null}

      {description ? <p className="text-black-50 px-3">{description}</p> : null}
    </div>
  );
};

export default ProductCard;
