type UseBooleanReturn = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
};

import React from "react"

export default function useBoolean(initialValue?: boolean): UseBooleanReturn {
  const [bool, setBool] = React.useState<boolean>(initialValue ?? false);
  const setTrue : () => void = () => setBool(true);
  const setFalse : () => void = () => setBool(false);
  return {value: bool, setTrue, setFalse};
}
