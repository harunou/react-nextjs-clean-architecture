export interface Presenter {
  count: () => Promise<number>;
  x5Count: () => Promise<number>;
}
