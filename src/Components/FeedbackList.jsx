import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const { feedbackDataList } = useContext(FeedbackContext);

  if (feedbackDataList.length === 0) {
    return <p>No Feedback Yet!</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackDataList.map((currentFeedback) => (
          <motion.div
            key={currentFeedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              feedbackData={currentFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  /*   return (
    <div className="feedback-list">
      {feedbackDataList.map((currentFeedback) => (
        <FeedbackItem
          key={currentFeedback.id}
          feedbackData={currentFeedback}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  ); */
};

/* FeedbackList.propTypes = {
  feedbackDataList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
}; */

export default FeedbackList;
