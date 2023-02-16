import React, { useState } from 'react';
import Section from './section/Section';
import FeedBackOptions from './feedback-options/FeedBackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = item => {
    setOptions(prevState => ({
      ...prevState,
      [item]: prevState[item] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return options.good + options.neutral + options.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return 0;
    }
    const positive = Math.round((options.good / countTotalFeedback()) * 100);
    return positive;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedBackOptions options={options} onLeaveFeedback={handleFeedback} />{' '}
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
