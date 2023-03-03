import Head from 'next/head'

function HeadGeneral({title}) {
  return (
      <Head>
        <title>{title}</title>
      </Head>
  )
}

export default HeadGeneral;