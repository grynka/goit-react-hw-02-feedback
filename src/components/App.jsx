import React from "react";
import Section from "./feedback/Section";
import Statistics from "./feedback/Statistics";

class Feedback extends React.Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}
}

export const App = () => {
  return (
   <>
   <Section 
title="Please leave feedback"><Feedback /></Section>
    
    <Section 
        title="Statistics">  <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()} 
            /></Section>
   </>
  );
};
