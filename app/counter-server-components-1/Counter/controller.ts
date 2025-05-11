"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { revalidatePath } from "next/cache";

export const addButtonClicked = async () => {
  await incrementCountUseCase(2);
  revalidatePath("/counter-server-components-1");
};

export const removeButtonClicked = async () => {
  await decrementCountUseCase();
  revalidatePath("/counter-server-components-1");
};
