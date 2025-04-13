"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { revalidatePath } from "next/cache";
import { Controller } from "./Counter.types";

type ControllerMethod<T = void> = () => Promise<T>;

export const addButtonClicked: Controller.AddButtonClicked = async (
  value: number
) => {
  await incrementCountUseCase(value);
  revalidatePath("/");
};

export const removeButtonClicked: ControllerMethod<void> = async () => {
  await decrementCountUseCase();
  revalidatePath("/");
};
