"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { revalidatePath } from "next/cache";
import { Controller } from "./Counter.types";

export const addButtonClicked: Controller.AddButtonClicked = async () => {
  await incrementCountUseCase();
  revalidatePath("/");
  return 'fulfilled'
};

export const removeButtonClicked: Controller.RemoveButtonClicked = async () => {
  await decrementCountUseCase();
  revalidatePath("/");
};
