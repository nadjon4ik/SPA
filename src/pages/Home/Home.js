import { Container } from "react-bootstrap";
import background from "./../../assets/images/pexelsphoto1028598.jpeg";
import "./home.css";
const Home = () => {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <Container>
        <h4>we are waiting for you </h4>
        <h1>Fruits & Flowers</h1>
      </Container>
    </div>
  );
};

export default Home;
