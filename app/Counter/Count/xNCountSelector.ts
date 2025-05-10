"use server";

import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";

export const xNCountSelector = async (x: number = 1) => {
  const count = await HybridCounterRepository.make().getCount();
  return count * x;
};
