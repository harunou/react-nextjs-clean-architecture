"use server";

import { LocalCounterRepository } from "@/gateways/LocalCounterRepository";
import { Presenter } from "./page.types";

export const getCount: Presenter.GetCount = async () => {
  return LocalCounterRepository.make().getCount();
};
