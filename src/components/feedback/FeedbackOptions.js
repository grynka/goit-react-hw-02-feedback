import React from "react";

const FeedbackOptions=({options, onLeaveFeedback}) => {
return options.map(option => 
            <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>
            )
            
    }

export default FeedbackOptions