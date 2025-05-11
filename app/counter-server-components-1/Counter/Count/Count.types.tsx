export interface Controller {
   componentMounted: () => Promise<Presenter>
}

export interface Presenter {
    count: number,
    x5Count: number,
}
