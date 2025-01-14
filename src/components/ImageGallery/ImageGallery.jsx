import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={s.imageList}>
    {images.map((image) => (
      <li className={s.imageItem} key={image.id}>
        <div className={s.imageDescription}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image)}
          />
        </div>
      </li>
    ))}
  </ul>
);
export default ImageGallery;
