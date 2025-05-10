import { countSelector } from "@/selectors/countSelector";
import { makeIncrementCountUseCase } from "@/useCases/incrementCount";

export async function POST(request: Request) {
  const data = (await request.json()) as { value: number };
  const incrementCountUseCase = makeIncrementCountUseCase(presenter);
  const count = await incrementCountUseCase(data.value);
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

const presenter = async () => {
  const count = await countSelector();
  return count;
};
