"use server";

import { countSelector } from "@/selectors/countSelector";
import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";

export const increment = async (): Promise<Presenter> => {
  await incrementCountUseCase(2);
  return presenter();
};

export const decrement = async (): Promise<Presenter> => {
  await decrementCountUseCase(1);
  return presenter();
};

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
