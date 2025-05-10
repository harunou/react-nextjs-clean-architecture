import { HybridCounterRepository } from "@/gateways/CounterRepository";
import { decrementCountUseCase } from "@/useCases/decrementCount";

export async function POST(request: Request) {
  const data = (await request.json()) as { value: number };
  return controller(data.value);
}

const controller = async (value: number) => {
  await decrementCountUseCase(value);
  return presenter();
}

const presenter = async () => {
  const repository = await HybridCounterRepository.make();
  const count = await repository.getCount();
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
