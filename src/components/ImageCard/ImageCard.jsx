import style from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
    return (
      <div className={style.card} onClick={() => openModal(image)}>
        <img className={style.image} src={image.urls.small} alt={image.alt_description} />
      </div>
    );
  };
  
  export default ImageCard;
  