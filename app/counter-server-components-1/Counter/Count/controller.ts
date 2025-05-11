import { Presenter } from "./Count.types";
import { presenter } from "./presenter";

export const componentMounted = async (): Promise<Presenter> => {
  return presenter();
};
