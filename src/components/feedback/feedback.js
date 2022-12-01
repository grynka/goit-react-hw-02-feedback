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
        this.countPositiveFeedbackPercentage() 
    }

    countTotalFeedback = () => {
         return (
            <p>Total: {this.state.good + this.state.neutral + this.state.bad}</p>)
    
    }

    countPositiveFeedbackPercentage = () => {
        console.log(this.state.bad)
        return(<p>Positive feedback: {
           this.state.good ? Math.round(((this.state.good/(this.state.good + this.state.neutral + this.state.bad))*100)) : 0 }
            %</p>)
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
        { (this.state.good + this.state.neutral + this.state.bad) = 0 ?
        <div className="feedbackCounts">
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
             {this.countTotalFeedback()}
             {this.countPositiveFeedbackPercentage()}
        </div> : <p>No feedback given</p> }
        </div>
    )
   }
}

export default Feedback;