// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Presenter {
  export type GetCount = () => Promise<number>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Controller {
  export type AddButtonClicked = () => Promise<void>;
  export type RemoveButtonClicked = () => Promise<void>;
}
