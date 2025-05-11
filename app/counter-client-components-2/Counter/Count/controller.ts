'use server'

import { countSelector } from "@/selectors/countSelector";

export const count = async (): Promise<Presenter> => {
  return presenter();
};

interface Presenter {
  count: number;
}

export const presenter = async (): Promise<Presenter> => {
  const count = await countSelector();
  return { count };
};
