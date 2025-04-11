"use server"

import { LocalCounterGateway } from "@/gateways/LocalCounterGateway";

export const incrementCountUseCase = async (value: number = 1): Promise<void> => {
    await LocalCounterGateway.make().incrementCount(value);
}
