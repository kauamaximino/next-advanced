import NextLink from 'next/link'
import StylizedLink from '../StylizedLink/index' 

function Link({ href, children, ...props }) {
  return (
    <div>
      <NextLink href={href}>
        <StylizedLink {...props}>{children}</StylizedLink>
      </NextLink>
    </div>
  )
}

export default Link;