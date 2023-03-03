import Head  from 'next/head';
import Link from '../components/Link';
import HeadGeneral from '@/components/Head';

function FAQPage() {
  return ( 
    <div>
      <HeadGeneral title="FAQ" />
      <h1>FAQ</h1>
      <Link href="/">Ir para a HomePage</Link>
    </div>  
  )
}

export default FAQPage;