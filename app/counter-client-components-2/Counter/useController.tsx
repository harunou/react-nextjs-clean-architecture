"use client";

import { Controller } from "./Counter.types";
import { decrement, increment } from "./controller";
import { useSWRConfig } from "swr";

const DEFAULT_COUNT = 0;
const INCREMENT_VALUE = 2;
const DECREMENT_VALUE = 1;

export const useController = (): Controller => {
  const { mutate } = useSWRConfig();

  return {
    addButtonClicked: () => {
      mutate("/actions/count", () => increment(INCREMENT_VALUE), {
        optimisticData: (value: { count: number } | undefined) => {
          const count = value?.count ?? DEFAULT_COUNT;
          return { count: count + INCREMENT_VALUE };
        },
      });
    },
    removeButtonClicked: () => {
      mutate("/actions/count", () => decrement(DECREMENT_VALUE), {
        optimisticData: (value: { count: number } | undefined) => {
          const count = value?.count ?? DEFAULT_COUNT;
          return { count: count - DECREMENT_VALUE };
        },
      });
    },
  };
};
