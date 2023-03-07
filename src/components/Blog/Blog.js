import arrows from "./../../assets/images/arrows-retweet.png";
import check from "./../../assets/images/badge-check.png";
import comment from "./../../assets/images/comment.png";
import download from "./../../assets/images/download.png";
import heart from "./../../assets/images/heart.png";

import "./blog.css";

function Blog(props) {
  const {
    name,
    photo,
    nickname,
    content,
    image,
    date,
    comments,
    retweet,
    likes,
  } = props.data;

  return (
    <div className="Post">
      <header className="Post-header">
        <img src={photo} className="Post-logo" alt="ANAKIN" />
        <span className="Post-name">{name}</span>
        <div className="Post-data">
          <img src={check} className="check" alt="" />
          <span className="nickname">{nickname}</span>
          <span className="data">{date}</span>
        </div>
      </header>
      <div className="Post-section">
        <p>{content}</p>
        <img src={image} className="Ray-Image" alt="logo" />
        <div className="Post-footer">
          <div>
            <img src={comment} alt="" />
            <span>{comments}</span>
          </div>
          <div>
            <img src={arrows} alt="" />
            <span>{retweet}</span>
          </div>
          <div>
            <img src={heart} alt="" />
            <span>{likes}</span>
          </div>
          <div>
            <img src={download} alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
