"use client";

import { startTransition } from "react";
import { Controller } from "./Counter.types";
import { count, decrement, increment } from "./controller";
import useCounterState from "./useCounterState";

export const useController = (): Controller => {
  //   const [, incrementAction, incrementPending] = useActionState(
  //     increment,
  //     undefined
  //   );
  //   void incrementPending;

  const [, setCounter] = useCounterState();

  return {
    componentMounted: () => {
      startTransition(async () => {
        const data = await count();
        setCounter(data.count);
      });
    },
    addButtonClicked: () => {
      startTransition(async () => {
        const data = await increment();
        setCounter(data.count);
      });
    },
    removeButtonClicked: () => {
      startTransition(async () => {
        const data = await decrement();
        setCounter(data.count);
      });
    },
  };
};
