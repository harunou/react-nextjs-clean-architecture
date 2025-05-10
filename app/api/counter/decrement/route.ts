import { decrementCountUseCase } from "@/useCases/decrementCount";

export async function POST(request: Request) {
  const data = (await request.json()) as { value: number };
  await decrementCountUseCase(data.value);
  return new Response(null, {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
