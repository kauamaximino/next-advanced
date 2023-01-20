import React from 'react'
import Link from '../components/Link'

interface TitleProps {
  children: React.ReactNode,
  as: string
}

function Title({ children, as }: TitleProps) {
  const Tag = as

  return (
    <React.Fragment>
      <h2>
        {children}
      </h2>
      <style jsx>{`
        ${Tag} {
          color: red;
          background: #eee;
        }
      `}</style>
    </React.Fragment>
  )
}

function HomePage() {
  return (
    <React.Fragment>
      <Title as='h1'>Home</Title>
      <Link href="faq">
        Ir para o FAQ
      </Link>
    </React.Fragment>
  )
}

export default HomePage;