export interface CounterGateway {
    getCount: () => Promise<number>
    incrementCount: (value: number) => Promise<void>
    decrementCount: (value: number) => Promise<void>
}
