"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { revalidatePath } from "next/cache";

export const addButtonClicked = async () => {
  await incrementCountUseCase(2);
  revalidatePath("/");
};

export const removeButtonClicked = async () => {
  await decrementCountUseCase();
  revalidatePath("/");
};
