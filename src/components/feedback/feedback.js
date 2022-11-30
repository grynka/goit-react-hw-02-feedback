import React from "react";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    goodIncrement = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }

    neutralIncrement = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    badIncrement = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
            
        }))
        this.countTotalFeedback() 
    }

    countTotalFeedback = () => {
        console.log(this.state.bad + this.state.neutra + this.state.good)
               return this.state.bad + this.state.neutra + this.state.good

    }

    countPositiveFeedbackPercentage = () => {

    } 

   render() {
    return (
        <div className="Feedback">        
        <p>Please leave feedback</p>
        <div className="feedbackControls">
        <button type="button" onClick={this.goodIncrement}>Good</button>
        <button type="button" onClick={this.neutralIncrement}>Neutral</button>
        <button type="button" onClick={this.badIncrement}>Bad</button>
        </div>
        <p>Statistic</p>
        <div className="feedbackCounts">
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {0}</p>
        </div>
        </div>
    )
   }
}

export default Feedback;