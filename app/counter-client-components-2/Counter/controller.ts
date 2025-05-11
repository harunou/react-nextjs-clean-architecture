"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";

export const increment = async (): Promise<void> => {
  await incrementCountUseCase(2);
};

export const decrement = async (): Promise<void> => {
  await decrementCountUseCase(1);
};
