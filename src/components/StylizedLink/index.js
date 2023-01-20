import React from 'react';

const StylizedLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <React.Fragment>
      <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
      </a>
    </React.Fragment>
  );
});

StylizedLink.displayName = 'StylizedLink';

export default StylizedLink;