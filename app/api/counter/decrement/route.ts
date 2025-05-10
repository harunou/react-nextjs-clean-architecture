import { countSelector } from "@/selectors/countSelector";
import { decrementCountUseCase } from "@/useCases/decrementCount";

export async function POST(request: Request) {
  return controller(request);
}

const controller = async (request: Request) => {
  const data = (await request.json()) as { value: number };
  await decrementCountUseCase(data.value);
  return presenter();
}

const presenter = async () => {
  const count = await countSelector();
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
