"use server";

import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";
import { Presenter } from "./Count.types";

export const getCount: Presenter.getCount = async () => {
  return HybridCounterRepository.make().getCount();
};
