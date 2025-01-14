import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose}>
    {image && (
      <div onClick={onClose}>
        <img
          className={s.modalImg}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <p>{image.user.name}</p>
        <p>{image.likes} likes</p>
      </div>
    )}
  </Modal>
);
export default ImageModal;
