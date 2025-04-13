"use server";

import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";

export const incrementCountUseCase = async (
  value: number = 1
): Promise<void> => {
  const count = await HybridCounterRepository.make().getCount();
  await HybridCounterRepository.make().setCount(count + value);
};
