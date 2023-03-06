import ImageBlock from "../../components/ImageBlock/ImageBlock";
import { IMAGES_DATA } from "../../shared/data";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="container gallery">
      {IMAGES_DATA.map((el, index) => (
        <ImageBlock key={index} data={el} />
      ))}
    </div>
  );
};

export default Gallery;
