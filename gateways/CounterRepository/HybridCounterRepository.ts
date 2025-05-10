import { CounterRepository } from "@/types/CounterGateway";
import { LocalCounterRepository } from "./LocalCounterRepository";

export class HybridCounterRepository {
  static instance: CounterRepository;

  static make(): CounterRepository {
    if (!HybridCounterRepository.instance) {
      HybridCounterRepository.instance = LocalCounterRepository.make();
    }
    return HybridCounterRepository.instance;
  }
}
