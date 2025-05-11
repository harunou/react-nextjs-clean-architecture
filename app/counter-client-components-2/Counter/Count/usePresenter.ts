import useCounterState from "../useCounterState";
import { Presenter } from "./Count.types";

export const usePresenter = (): Presenter => {
  const [count] = useCounterState();
  return {
    get count() {
      return count;
    },
    get x5Count() {
      return count * 5;
    },
  };
};
