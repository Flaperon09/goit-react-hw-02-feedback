// import data from './data/data.json';
import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import Feedback from "./Feedback";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Массив названий кнопок отзывов
  options = ["Good", "Neutral", "Bad"];

  // Колбек по нажатию кнопок отзывов
  onLeaveFeedback = (index) => {
    if (index === 0) {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        }
      });
      
    } else if (index === 1) {
      this.setState(prevState => {
        return {
            neutral: prevState.neutral + 1,
        }
      });
    } else if (index === 2) {
      this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
      });
    };
    // Задержка для ожидания асинхронной операции setState
    setTimeout(() => {
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage()
    }, 1);
  };

  // Подсчёт общего количества отзывов
  countTotalFeedback = () => {
    this.setState(() => {
      return {
        total: this.state.good + this.state.neutral + this.state.bad,
      }  
    });
  };
  
  // Подсчёт процента положительных отзывов
  countPositiveFeedbackPercentage = () => {
    this.setState({
      positivePercentage: Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
    })
  };
  
  render() {
    return (
      <div>
      
        <GlobalStyle />

        <Feedback />

        <p>=======================================</p>

        <Section
          title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section
          title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>
      
      </div>
    );
  }
};

export default App;