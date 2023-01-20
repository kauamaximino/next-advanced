import NextLink from 'next/link'
import React from 'react'
import StylizedLink from '../StylizedLink/index' 

function Link({ href, children, ...props }) {
  return (
    <React.Fragment>
      <NextLink href={href}>
        <StylizedLink {...props}>{children}</StylizedLink>
      </NextLink>
    </React.Fragment>
  )
}

export default Link;