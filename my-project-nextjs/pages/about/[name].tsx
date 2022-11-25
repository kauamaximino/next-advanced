import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

const AboutInd = () => {
  const { query: { name } } = useRouter();

  return (
    <div>
      <Head>
        <title>About {name}</title>
      </Head>
      <h1>About slug de { name }</h1>

      <p>Pathname: {useRouter().pathname}</p>

      <Link href={'/about/pedro'}
      scroll={false}
      >
        <button className='btn btn-primary red'>Ir para a página de Pedro</button>
      </Link>
    </div>
  )
}

export default AboutInd