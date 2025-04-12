export interface CounterGateway {
    getCount: () => Promise<number>
    setCount: (value: number) => Promise<void>
}
