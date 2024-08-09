import React, { useLayoutEffect, useRef } from 'react';

function LayoutComponent() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      console.log('Element width:', divRef.current.offsetWidth);
    }
  }, []);

  return <div ref={divRef}>Layout Component</div>;
}

export default LayoutComponent;
