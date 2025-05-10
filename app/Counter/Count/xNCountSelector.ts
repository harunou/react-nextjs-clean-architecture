"use server";

import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";

export const xNCountSelector = async (x: number = 1) => {
  const repository = await HybridCounterRepository.make();
  const count = await repository.getCount();
  return count * x;
};
