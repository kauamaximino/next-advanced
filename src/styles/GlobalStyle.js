import React from 'react'

function GlobalStyle() {
  return (
    <React.Fragment>
      <style jsx global>{`
        body {
          background: #fgfgff;
          color: #f00;
          font-family: sans-serif;
        }
      `}</style>
    </React.Fragment>
  )
}

export default GlobalStyle;