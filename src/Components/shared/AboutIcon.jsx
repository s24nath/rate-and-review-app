import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const AboutIcon = () => {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: "/about",
        }}
      >
        <FaInfoCircle size={30} />
      </Link>
    </div>
  );
};

export default AboutIcon;
