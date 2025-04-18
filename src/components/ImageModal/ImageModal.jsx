import style from "./ImageModal.module.css";
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ImageModal = ({ image, isOpen, onClose }) => {
  if (!image) return null;
  return (
    <Modal className={style.modalContent} overlayClassName={style.overlay} isOpen={isOpen} onRequestClose={onClose} >
      <img className={style.modalImage} src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};
export default ImageModal;

