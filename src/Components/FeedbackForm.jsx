import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = () => {
  // States
  const [review, setReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(null);

  // Contexts
  const { handleNewFeedback, rating, handleRating, edit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (edit.inEditMode === true) {
      setBtnDisabled(false);
      setReview(edit.editItem.text);
      handleRating(edit.editItem.rating);
    }
  }, [edit]);

  // Local Functions
  const handleInputChange = ({ target }) => {
    setReview(target.value);
    if (target.value.trim().length < 10) {
      setBtnDisabled(true);
      if (target.value === "") {
        setShowMessage(null);
      } else {
        setShowMessage("Text must be atleast 10 characters.");
      }
    } else {
      setBtnDisabled(false);
      setShowMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      if (edit.inEditMode) {
        updateFeedback(edit.editItem.id,{ text: review, rating });
      } else {
        handleNewFeedback({ text: review, rating });
      }
    }
    setReview("");
    handleRating(0);
  };

  // Rendering
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={review}
            onChange={handleInputChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {showMessage && <div className="message">{showMessage}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
