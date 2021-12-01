import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      Home Page!
      <Link to="/Products">
        <button className="btn btn-link my-3">Ver Productos</button>
      </Link>
    </div>
  );
};

export default HomePage;
