'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>현재 카운트 {count}</h1>
      <button onClick={() => setCount((num) => num + 1)}>증가</button>
    </>
  );
};

export default Counter;
