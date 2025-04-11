"use server"

import { HybridCounterGateway } from "@/gateways/HybridCounterGateway";

export const incrementCountUseCase = async (value: number = 1): Promise<void> => {
    await HybridCounterGateway.make().incrementCount(value);
}
