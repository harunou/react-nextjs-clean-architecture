export interface CounterRepository {
    getCount: () => Promise<number>
    setCount: (value: number) => Promise<void>
}
