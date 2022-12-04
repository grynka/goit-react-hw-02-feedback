import React from "react";
import { Button } from "./feedback.styled";

const FeedbackOptions=({options, onLeaveFeedback}) => {
return options.map(option => 
            <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</Button>
            )
            
    }

export default FeedbackOptions