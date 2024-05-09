import styles from "./ImgText.module.css";

const ImgText = ({ text, image }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Imagen" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ImgText;
