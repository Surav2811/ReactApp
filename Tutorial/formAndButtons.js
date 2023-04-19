import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('Taylor');
  var [age, setAge] = useState(25);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <button onClick={() => setAge(age = 25)}>
        Age is 25
      </button>
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <button onClick={() => setAge(age - 1)}>
        Decrement age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}
