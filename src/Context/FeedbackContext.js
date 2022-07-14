import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import feedbacksArray from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(feedbacksArray);
  const [edit, setedit] = useState({
    editItem: {},
    inEditMode: false,
  });
  const [rating, setRating] = useState(0);

  const handleNewFeedback = (feedbackData) => {
    feedbackData.id = uuidv4();
    setFeedbacks([feedbackData, ...feedbacks]);
  };

  const handleRating = (selected) => setRating(selected);

  const deleteFeedbackItem = (id) => {
    if (window.confirm("Are You Sure you want to delete")) {
      setFeedbacks(
        feedbacks.filter((currentFeedback) => currentFeedback.id !== id)
      );
    }
  };

  const editFeedbackItem = (editItem) => {
    setedit({
      editItem,
      inEditMode: true,
    });
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedbacks(
      feedbacks.map((currentItem) =>
        currentItem.id === id
          ? { ...currentItem, ...updatedFeedback }
          : currentItem
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackDataList: feedbacks,
        rating,
        edit,
        handleRating,
        deleteFeedbackItem,
        handleNewFeedback,
        editFeedbackItem,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
