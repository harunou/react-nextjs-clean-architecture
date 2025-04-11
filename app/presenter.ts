"use server";

import { LocalCounterGateway } from "@/gateways/LocalCounterGateway";
import { Presenter } from "./page.types";

export const getCount: Presenter.GetCount = async () => {
  return LocalCounterGateway.make().getCount();
};
