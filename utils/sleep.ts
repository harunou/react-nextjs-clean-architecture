export const sleep = (ms: number = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const noop = (...args: any[]) => {
  void args;
};
