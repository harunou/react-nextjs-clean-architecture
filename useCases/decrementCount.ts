"use server"

import { HybridCounterGateway } from "@/gateways/HybridCounterGateway";

export const decrementCountUseCase = async (value: number = 1): Promise<void> => {
    await HybridCounterGateway.make().decrementCount(value);
}
