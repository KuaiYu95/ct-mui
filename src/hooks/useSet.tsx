'use client';
import { useState } from 'react';

function useSet<K extends React.Key>(initialValue?: React.Key[]) {
  const getInitValue = () => initialValue || [];
  const [set, setSet] = useState<React.Key[]>(getInitValue);

  const add = (key: K) => {
    if (set.includes(key)) {
      return;
    }
    setSet((prevSet) => [...prevSet, key]);
  };

  const remove = (key: K) => {
    if (!set.includes(key)) {
      return;
    }
    setSet((prevSet) => prevSet.filter((item) => item !== key));
  };

  const clear = () => setSet([]);

  return [
    set,
    {
      setSet,
      add,
      remove,
      clear,
    },
  ] as const;
}

export default useSet;
