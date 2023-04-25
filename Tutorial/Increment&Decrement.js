import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score => score + 1);
  }
  function decrement() {
    setScore(score => score - 1);
  }
  function reset() {
    setScore(score=>0)
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => decrement()}>-1</button>
      <button onClick={() => {
      decrement();
      decrement();
      decrement();
      }}>-3</button>
      <button onClick={() => reset()}>Reset</button>
      <h1>Score: {score}</h1>
    </>
  )
}
