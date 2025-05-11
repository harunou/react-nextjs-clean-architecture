import { Presenter } from "./Count.types";

export const usePresenter = (): Presenter => {
    const count = 0;
    const x5Count = count * 5;

    return {
        count,
        x5Count,
    };
}
