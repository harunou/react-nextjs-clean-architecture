import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

let counter = 0;
const listeners = new Set<Dispatch<SetStateAction<number>>>();

function useCounterState(initialValue = 0): [number, (value: number) => void] {
  if (counter === 0 && initialValue !== 0) {
    counter = initialValue;
  }

  const [state, setState] = useState(counter);

  useEffect(() => {
    // Add this component as a listener
    listeners.add(setState);

    // Update to current counter value
    setState(counter);

    // Cleanup when component unmounts
    return () => {
      listeners.delete(setState);
    };
  }, []);

  const setCounter = (newValue: number) => {
    counter = newValue;
    listeners.forEach(listener => listener(counter));
  };

  return [state, setCounter];
}

export default useCounterState;
