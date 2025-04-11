export class LocalCounterGateway {
    static instance: LocalCounterGateway;

    static make(): LocalCounterGateway {
        if (!LocalCounterGateway.instance) {
            LocalCounterGateway.instance = new LocalCounterGateway();
        }
        return LocalCounterGateway.instance;
    }

    constructor(private count: number = 10){}

    async getCount(): Promise<number> {
        return this.count;
    }

    async incrementCount(value: number): Promise<void> {
        this.count += value;
    }

    async decrementCount(value: number): Promise<void> {
        this.count -= value;
    }
}
