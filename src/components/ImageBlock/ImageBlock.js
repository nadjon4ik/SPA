import React from "react";
import "./styles.css";
import { BsHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

const ImageBlock = (props) => {
  const { name, likes, comments } = props.data;
  return (
    <div style={{ backgroundImage: `url(${name})` }} className="column">
      <div className="icon">
        <div className="icon-block">
          <BsHeartFill />
          <span>{likes}</span>
        </div>
        <div className="icon-block">
          <FaComment />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
