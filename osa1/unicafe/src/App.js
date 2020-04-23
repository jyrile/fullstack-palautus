import React, { useState } from "react";

// STEP 5

const StatisticLine = ({ text, value, type }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{type}</td>
    </tr>
  );
};

const Statistics = ({ bad, neutral, good }) => {
  const calcAverage = (bad, neutral, good) => {
    return ((bad * -1 + good) / (bad + neutral + good)).toFixed(1);
  };

  const calcPositive = (bad, neutral, good) => {
    return ((good / (good + bad + neutral)) * 100).toFixed(1);
  };

  if (bad + neutral + good > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="All" value={bad + neutral + good} />
          <StatisticLine
            text="Average"
            value={calcAverage(bad, neutral, good)}
          />
          <StatisticLine
            text="Positive"
            value={calcPositive(bad, neutral, good)}
            type="%"
          />
        </table>
      </div>
    );
  }
  return <p>No feedback given</p>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback:</h1>
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <hr />
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  );
};

export default App;
