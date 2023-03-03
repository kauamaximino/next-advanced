import Head  from 'next/head';
import Link from '../components/Link';

function FAQPage() {
  return ( 
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <h1>FAQ</h1>
      <Link href="/">Ir para a HomePage</Link>
    </div>  
  )
}

export default FAQPage;