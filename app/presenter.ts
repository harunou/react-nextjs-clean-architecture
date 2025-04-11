"use server"

import { LocalCounterGateway } from "@/gateways/LocalCounterGateway";

export const getCount = async (): Promise<number> => {
  return await LocalCounterGateway.make().getCount();
}
