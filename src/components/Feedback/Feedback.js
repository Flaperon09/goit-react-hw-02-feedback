import React, { Component } from 'react';
import { FeedbackButton, ButtonWrapper, FeedbackTitle, FeedbackStat, FeedbackStatGood, FeedbackStatNeutral,FeedbackStatBad, FeedbackStatTotal, FeedbackStatPercentage } from './Feedback.styled';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    good = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        });
    };

    neutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    };

    bad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        });
    };

    countTotalFeedback = () => {
        return (
            this.state.good + this.state.neutral + this.state.bad
        )
    };
    
    countPositiveFeedbackPercentage = () => {
        return (
            Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
        )
    };

	render () {
		return (
			<div>
				<FeedbackTitle>Please leave feedback</FeedbackTitle>
                <ButtonWrapper>
					<FeedbackButton type="button" onClick={this.good}>Good</FeedbackButton>
                    <FeedbackButton type="button" onClick={this.neutral}>Neutral</FeedbackButton>
                    <FeedbackButton type="button" onClick={this.bad}>Bad</FeedbackButton>
                </ButtonWrapper>
                <FeedbackStat>Statistics</FeedbackStat>
                <FeedbackStatGood>Good: {this.state.good}</FeedbackStatGood>
                <FeedbackStatNeutral>Neutral: {this.state.neutral}</FeedbackStatNeutral>
                <FeedbackStatBad>Bad: {this.state.bad}</FeedbackStatBad>
                <FeedbackStatTotal>Total: {this.countTotalFeedback()}</FeedbackStatTotal>
                <FeedbackStatPercentage>Positive feedback: {this.countPositiveFeedbackPercentage()}%</FeedbackStatPercentage>
			</div>
		);
	}
};

export default Feedback;