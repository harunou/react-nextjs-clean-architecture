import { CounterRepository } from "@/types/CounterGateway";
import { LocalCounterRepository } from "./LocalCounterRepository";

const repo = LocalCounterRepository.make()

export class HybridCounterRepository {
  static instance: CounterRepository;

  static make(): CounterRepository {
    if (!HybridCounterRepository.instance) {
      HybridCounterRepository.instance = repo;
    }
    return HybridCounterRepository.instance;
  }
}
