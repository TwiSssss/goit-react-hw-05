import style from "./ImageGallery.module.css";
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style.gallery} >
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} openModal={openModal} />
         </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
