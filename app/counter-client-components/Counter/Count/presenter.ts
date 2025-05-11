import { countSelector } from "@/selectors/countSelector";

export const count = async () => {
  return countSelector();
};

export const x5Count = async () => {
  const count = await countSelector();
  return count * 5;
};
