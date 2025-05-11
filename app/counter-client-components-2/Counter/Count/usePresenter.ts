import { count } from "./controller";
import { Presenter } from "./Count.types";
import useSWR from "swr";

const DEFAULT_COUNT = 0;

export const usePresenter = (): Presenter => {
  const { data, isLoading, isValidating } = useSWR("/actions/count", count, {
    fallbackData: {
      count: DEFAULT_COUNT,
    },
    keepPreviousData: true,
  });
  return {
    get status() {
      return {
        isLoading,
        isValidating,
        isMutating: false,
      };
    },
    get count() {
      return data.count;
    },
    get x5Count() {
      return data.count * 5;
    },
  };
};
