"use server";

import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";

export const countSelector = async () => {
  const repository = await HybridCounterRepository.make();
  return await repository.getCount();
};
