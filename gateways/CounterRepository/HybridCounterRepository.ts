import { CounterRepository } from "@/types/CounterGateway";
import { LocalCounterRepository } from "./LocalCounterRepository";

export class HybridCounterRepository {
  static instance: CounterRepository;

  static async make(): Promise<CounterRepository> {
    if (!HybridCounterRepository.instance) {
      HybridCounterRepository.instance = await LocalCounterRepository.make();
    }
    return HybridCounterRepository.instance;
  }
}
