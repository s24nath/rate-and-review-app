import { FaTrash, FaPen } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ feedbackData }) => {
  const { deleteFeedbackItem, editFeedbackItem } = useContext(FeedbackContext);  

  return (
    <Card>
      <div className="num-display">{feedbackData.rating}</div>
      <button
        onClick={() => deleteFeedbackItem(feedbackData.id)}
        className="close"
      >
        <FaTrash color="#ff6a95" />
      </button>
      <button onClick={() => editFeedbackItem(feedbackData)} className="edit">
        <FaPen color="#ff6a95" />
      </button>
      <div className="text-display">{feedbackData.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedbackData: PropTypes.object.isRequired,
};

export default FeedbackItem;
