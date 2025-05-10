import { xNCountSelector } from "./xNCountSelector";

export const count = async () => {
  return xNCountSelector();
};

export const x5Count = async () => {
  return xNCountSelector(5);
};
