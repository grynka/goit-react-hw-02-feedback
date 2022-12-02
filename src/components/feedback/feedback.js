import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = fedback => {
        // eslint-disable-next-line default-case
        switch (fedback) {
            case "good":
                this.setState(prevState => ({
                    good: prevState.good + 1,
                }))
                break;
                case "neutral":
                    this.setState(prevState => ({
                        neutral: prevState.neutral + 1,
            }))
            break;
            case "bad":
                this.setState(prevState => ({
                    bad: prevState.bad + 1,
                    
                }))
            }   
        }

  

    countTotalFeedback = () => {
        console.log(Object.keys(this.state))
        const total = this.state.good + this.state.neutral + this.state.bad
         return total
    
    }

    countPositiveFeedbackPercentage = () => {
        return(this.state.good ? Math.round(((this.state.good/(this.state.good + this.state.neutral + this.state.bad))*100)) : 0 )
    } 


   render() {
    return (
        <>
<Section title="Please leave feedback">
        <FeedbackOptions
        options = {Object.keys(this.state)}
        onLeaveFeedback = {this.onLeaveFeedback}
 />
        </Section>
        <Section title="Please leave feedback">
        <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()} 
            />
</Section></>
    )
   }
}

export default Feedback;