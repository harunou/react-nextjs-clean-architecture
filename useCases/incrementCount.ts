import { HybridCounterRepository } from "@/gateways/CounterRepository/HybridCounterRepository";

export const incrementCountUseCase = async (
  value: number = 1
): Promise<void> => {
  const repository = await HybridCounterRepository.make();
  const count = await repository.getCount();
  await repository.setCount(count + value);
};

const noop = <T>(): T => {
  return undefined as T;
};

export const makeIncrementCountUseCase =
  <T = void>(presenter: () => T = noop) =>
  async (value: number): Promise<T> => {
    const repository = await HybridCounterRepository.make();
    const count = await repository.getCount();
    await repository.setCount(count + value);
    return presenter();
  };
