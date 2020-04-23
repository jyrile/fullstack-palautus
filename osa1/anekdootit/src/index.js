//osa 1 step 3

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// katsoo votes-taulukosta suurimman luvun ja etsii sille indeksin
const MostVotes = (props) => {
  const copy = [...props.votes];
  const max = Math.max(...copy);
  const result = copy.findIndex((e) => e >= max);
  return <p>{anecdotes[result]}</p>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0]);

  const setToSelected = (newAnecdote) => {
    setSelected(newAnecdote);
  };

  const setVoteTo = (newVote) => {
    const copyArray = [...votes];
    copyArray[newVote] += 1;
    setVote(copyArray);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      <i>has {votes[selected]} votes</i>
      <br />
      <Button text="vote" handleClick={() => setVoteTo(selected)} />
      <Button
        text="next anecdote"
        handleClick={() => {
          setToSelected(Math.floor(Math.random() * Math.floor(6)));
        }}
      />
      <br />
      <h1>Anecdote with most votes</h1>
      <MostVotes votes={votes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
