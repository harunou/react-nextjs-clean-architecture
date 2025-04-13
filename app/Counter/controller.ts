"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { revalidatePath } from "next/cache";
import { Controller } from "./Counter.types";

export const addButtonClicked: Controller.AddButtonClicked = async (
  value: number
) => {
  await incrementCountUseCase(value);
  revalidatePath("/");
};

export const removeButtonClicked: Controller.RemoveButtonClicked = async () => {
  await decrementCountUseCase();
  revalidatePath("/");
};
