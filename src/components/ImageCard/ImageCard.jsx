import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => (
  <div className={s.imageCardContainer} onClick={onClick}>
    <img className={s.smallImg} src={src} alt={alt} />
  </div>
);
export default ImageCard;
