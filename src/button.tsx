import React, {useState} from 'react';

const Button = () => {
  const [count, setCount] = useState(0)
  return <>
    <button onClick={() => { setCount(p => p + 1) }}>+</button>
    <button onClick={() => { setCount(p => p - 1) }}>-</button>
    {count}
  </>;
};

export default Button;
