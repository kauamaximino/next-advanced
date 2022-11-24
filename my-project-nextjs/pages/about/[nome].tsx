import Link from 'next/link';
import { useRouter } from 'next/router'

const AboutInd = () => {
  const { query: { nome } } = useRouter();

  return (
    <div>
      <h1>About slug de { nome }</h1>

      <p>Pathname: {useRouter().pathname}</p>

      <Link href={'/about/pedro'}
      scroll={false}
      >
        <button>Ir para a página de Pedro</button>
      </Link>
    </div>
  )
}

export default AboutInd