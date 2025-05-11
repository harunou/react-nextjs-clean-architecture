import { countSelector } from "@/selectors/countSelector";
import { Presenter } from "./Count.types";

export const presenter = async (): Promise<Presenter> => {
  const count = await countSelector();
  const x5Count = count * 5;
  return {
    count,
    x5Count,
  };
};
