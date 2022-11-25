import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';

import { Button } from '../../components/button';

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Page About</h1>
      <h2>Meu nome é: {process.env.NEXT_PUBLIC_NOME}</h2>
      <p>Count: {count}</p>

      <Button label='Página about' />

      <Link href="/about/kaua">Kauã</Link>
      <Link href="/about/maximino">Maximino</Link>

      <button className='red' onClick={() => {setCount(count + 1)}}>Aumentar count</button>
      <button disabled={count <= 0}
        className='btn btn-primary'
        onClick={() => { setCount(count - 1) }}
      >
        Diminuir count
      </button>

      <button
        className='btn btn-primary'
        onClick={() => { setCount(0) }}
      >
        Zerar count
      </button>
      
      <Script
        src="https://google-analytics.com/analytics.js"
        strategy="afterInteractive"
        onLoad={()=> {console.log('Script carregado')}}
      />
    </div>
  );
};

export default About;