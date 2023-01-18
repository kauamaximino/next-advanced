import React from 'react';

const StylizedLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <div>
      <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
      </a>
    </div>
  );
});

StylizedLink.displayName = 'StylizedLink';

export default StylizedLink;