import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />;
});

function ParentComponent() {
  const inputRef = useRef(null);

  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Fancy Input</button>
    </div>
  );
}

export default ParentComponent;
