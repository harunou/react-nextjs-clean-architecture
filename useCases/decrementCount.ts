"use server"

import { LocalCounterGateway } from "@/gateways/LocalCounterGateway";

export const decrementCountUseCase = async (value: number = 1): Promise<void> => {
    await LocalCounterGateway.make().decrementCount(value);
}
