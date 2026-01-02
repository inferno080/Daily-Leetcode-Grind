import React, { Dispatch, SetStateAction } from 'react';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function useCounter(initialValue?: number): UseCounterReturn {
  const [ count, setCount] = React.useState< number>(initialValue ?? 0);
  let increment : (()=>void) = () => {
    setCount(count + 1);
  }
  let decrement: (()=>void) = () => {
    setCount(count - 1);
  }
  let reset: (() => void) = () => {
    setCount(initialValue ?? 0);
  }
  return {count, increment, decrement, reset, setCount};
}
