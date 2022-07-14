import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  /*   return (
      <div
        className="card"
        style={{
          backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
          color: reverse ? "#fff" : "#202020",
        }}
      >
        {children}
      </div>
    ); */
  return <div className={`card${reverse && " reverse"}`}>{children}</div>;
};

Card.defaultProps = {
  reverse: "",
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
