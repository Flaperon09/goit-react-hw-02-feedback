import React, { Component } from 'react';
import { FeedbackButton, ButtonWrapper } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
	render() {	
		return (
			<div>
				<ButtonWrapper>
					{this.props.options.map((option, index) => (
						<FeedbackButton key={index} type="button" onClick={() => this.props.onLeaveFeedback(index)}>{option}</FeedbackButton>
					))}
                </ButtonWrapper>
			</div>
		);
	}
};

export default FeedbackOptions;