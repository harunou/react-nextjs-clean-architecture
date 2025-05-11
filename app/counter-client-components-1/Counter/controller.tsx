"use server";

import { countSelector } from "@/selectors/countSelector";
import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { sleep } from "@/utils/sleep";

export const addButtonClicked = async () => {
  await sleep(1000);
  await incrementCountUseCase(2);
  return countSelector();
};

export const removeButtonClicked = async () => {
  await sleep(1000);
  await decrementCountUseCase();
  return countSelector();
};

export const componentMounted = async () => {
  return countSelector();
};
