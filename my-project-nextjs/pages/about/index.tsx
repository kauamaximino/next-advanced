import Link from 'next/link';
import { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Page About</h1>
      <p>Count: {count}</p>

      <Link href="/about/kaua">Kauã</Link>
      <Link href="/about/maximino">Maximino</Link>

      <button onClick={() => {setCount(count + 1)}}>Aumentar count</button>
      <button onClick={() => {setCount(count - 1)}}>Diminuir count</button>
      <button onClick={() => {setCount(0)}}>Zerar count</button>
    </div>
  );
};

export default About;