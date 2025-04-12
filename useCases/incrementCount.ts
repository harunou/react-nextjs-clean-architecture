"use server";

import { HybridCounterGateway } from "@/gateways/HybridCounterGateway";

export const incrementCountUseCase = async (
  value: number = 1
): Promise<void> => {
  const count = await HybridCounterGateway.make().getCount();
  await HybridCounterGateway.make().setCount(count + value);
};
