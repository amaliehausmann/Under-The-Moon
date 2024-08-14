import styles from "./Gallery.module.scss";

export function Gallery(props) {
  return (
    <section>
      <h3 className={styles.gallerHeader}>FOLLOW US ON INSTAGRAM</h3>
      <section className={styles.imagesGallery}>
        {props.GalleryImage.map((item) => (
          <img key={item} src={`../src/assets/${item}`} alt="" />
        ))}
      </section>
    </section>
  );
}
