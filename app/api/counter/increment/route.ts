import { HybridCounterRepository } from "@/gateways/CounterRepository";
import { incrementCountUseCase } from "@/useCases/incrementCount";

export async function POST(request: Request) {
  const data = (await request.json()) as { value: number };
  await incrementCountUseCase(data.value);
  const count = await HybridCounterRepository.make().getCount();
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
