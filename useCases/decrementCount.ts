import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";

export const decrementCountUseCase = async (
  value: number = 1
): Promise<void> => {
  const repository = await HybridCounterRepository.make();
  const count = await repository.getCount();
  await repository.setCount(count - value);
};
