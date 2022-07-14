import PropTypes from "prop-types";
import React, { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackStats = () => {
  const { feedbackDataList } = useContext(FeedbackContext);

  // Calculating ratings avg.
  let average =
    feedbackDataList.reduce((acc, curr) => acc + curr.rating, 0) /
    feedbackDataList.length;
  return (
    <div className="feedback-stats">
      <h4>
        {feedbackDataList.length}{" "}
        {feedbackDataList.length > 1 ? "Reviews" : "Review"}
      </h4>
      <h4>
        Average Rating:{" "}
        {feedbackDataList.length === 0 ? "0" : average.toFixed(1)}
      </h4>
    </div>
  );
};

// FeedbackStats.propTypes = {
//   feedbackDataList: PropTypes.array.isRequired,
// };

export default FeedbackStats;
