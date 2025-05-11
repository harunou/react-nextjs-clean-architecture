"use server";

import { countSelector } from "@/selectors/countSelector";
import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";

export const increment = async (value: number): Promise<Presenter> => {
  await incrementCountUseCase(value);
  return presenter();
};

export const decrement = async (value: number): Promise<Presenter> => {
  await decrementCountUseCase(value);
  return presenter();
};

interface Presenter {
  count: number;
}

export const presenter = async (): Promise<Presenter> => {
  const count = await countSelector();
  return { count };
};
