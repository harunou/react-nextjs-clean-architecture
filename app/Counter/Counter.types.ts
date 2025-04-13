// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Controller {
  export type AddButtonClicked = (
    value: number
  ) => Promise<void>;
  export type RemoveButtonClicked = () => Promise<void>;
}
