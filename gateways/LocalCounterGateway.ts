import { CounterGateway } from "@/types/CounterGateway";

export class LocalCounterGateway implements CounterGateway {
  static instance: LocalCounterGateway;

  static make(): LocalCounterGateway {
    if (!LocalCounterGateway.instance) {
      LocalCounterGateway.instance = new LocalCounterGateway();
    }
    return LocalCounterGateway.instance;
  }

  constructor(private count: number = 10) {}

  async getCount(): Promise<number> {
    return this.count;
  }

  async setCount(value: number): Promise<void> {
    this.count = value;
  }
}
