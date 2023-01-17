import NextLink from 'next/link'

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      {children}
    </NextLink>
  )
}

export default Link;