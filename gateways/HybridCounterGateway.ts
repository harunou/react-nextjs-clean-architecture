import { CounterGateway } from "@/types/CounterGateway";
import { LocalCounterGateway } from "./LocalCounterGateway";

export class HybridCounterGateway {
  static instance: CounterGateway;

  static make(): CounterGateway {
    if (!HybridCounterGateway.instance) {
      HybridCounterGateway.instance = LocalCounterGateway.make();
    }
    return HybridCounterGateway.instance;
  }
}
