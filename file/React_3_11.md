import React, { useState, useDebugValue } from 'react';

function useCustomHook(value) {
  useDebugValue(value);
  return value;
}

function DebugComponent() {
  const value = useCustomHook('debug-value');

  return <div>{value}</div>;
}

export default DebugComponent;
