import React, { Component } from 'react';
import { FeedbackStatGood, FeedbackStatNeutral,FeedbackStatBad, FeedbackStatTotal, FeedbackStatPercentage } from './Statistics.styled';
import NotificationMessage from '../Notification'

class Statistics extends Component {
        render() {
                const { good, neutral, bad, total, positivePercentage } = this.props;
                return (
                        total === 0
                                ?
                                <div>
                                        <NotificationMessage
                                                message="There is no feedback"/>
                                </div>
                                :
			        <div>
                                        <FeedbackStatGood>Good: {good}</FeedbackStatGood>
                                        <FeedbackStatNeutral>Neutral: {neutral}</FeedbackStatNeutral>
                                        <FeedbackStatBad>Bad: {bad}</FeedbackStatBad>
                                        <FeedbackStatTotal>Total: {total}</FeedbackStatTotal>
                                        <FeedbackStatPercentage>Positive feedback: {positivePercentage}%</FeedbackStatPercentage>
			        </div>
		);
	}
};

export default Statistics;