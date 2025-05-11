"use server";

import { decrementCountUseCase } from "@/useCases/decrementCount";
import { incrementCountUseCase } from "@/useCases/incrementCount";
import { sleep } from "@/utils/sleep";
import { revalidatePath } from "next/cache";

export const addButtonClicked = async () => {
  await sleep(1000);
  await incrementCountUseCase(2);
  revalidatePath("/counter-client-components-1");
};

export const removeButtonClicked = async () => {
  await sleep(1000);
  await decrementCountUseCase();
  revalidatePath("/counter-client-components-1");
};
