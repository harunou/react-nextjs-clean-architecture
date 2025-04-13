// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Controller {
  export type AddButtonClicked = () => Promise<"fulfilled" | "rejected">;
  export type RemoveButtonClicked = () => Promise<void>;
}
