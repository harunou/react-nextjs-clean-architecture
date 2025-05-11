"use client";

import { startTransition } from "react";
import { Controller } from "./Counter.types";
import { decrement, increment } from "./controller";
import { useSWRConfig } from "swr";

export const useController = (): Controller => {
  const { mutate } = useSWRConfig();

  return {
    addButtonClicked: () => {
      startTransition(async () => {
        await increment();
        mutate("/actions/count");
      });
    },
    removeButtonClicked: () => {
      startTransition(async () => {
        await decrement();
        mutate("/actions/count");
      });
    },
  };
};
