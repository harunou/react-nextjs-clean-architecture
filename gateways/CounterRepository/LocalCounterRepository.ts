import { CounterRepository } from "@/types/CounterGateway";

export class LocalCounterRepository implements CounterRepository {
  static instance: LocalCounterRepository;

  static make(): LocalCounterRepository {
    if (!LocalCounterRepository.instance) {
      LocalCounterRepository.instance = new LocalCounterRepository();
    }
    return LocalCounterRepository.instance;
  }

  constructor(private count: number = 10) {}

  async getCount(): Promise<number> {
    return this.count;
  }

  async setCount(value: number): Promise<void> {
    this.count = value;
  }
}
