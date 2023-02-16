import React, { Component } from 'react';
import Section from './section/Section';
import FeedBackOptions from './feedback-options/FeedBackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    const positive = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positive;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedBackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          /> </Section>
          
        <Section title={'Statistics'}>
          {(this.countTotalFeedback()!==0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />): <Notification message="There is no feedback"/>)}
        </Section>
      </>
    );
  }
}

export default App;
