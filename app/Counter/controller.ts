"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { makeIncrementCountUseCase } from "@/useCases/incrementCount";
import { revalidatePath } from "next/cache";

export const addButtonClicked = async () => {
  const incrementCountUseCase = makeIncrementCountUseCase();
  await incrementCountUseCase(2);
  revalidatePath("/");
};

export const removeButtonClicked = async () => {
  await decrementCountUseCase();
  revalidatePath("/");
};
