"use server";

import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";
import { Presenter } from "./Count.types";

export const getCount = async (): Promise<Presenter.Count> => {
  return xNCountSelector();
};

export const getX5Count = async (): Promise<Presenter.Count> => {
  return xNCountSelector(5);
};

const xNCountSelector = async (x: number = 1) => {
  const count = await HybridCounterRepository.make().getCount();
  return count * x;
};
