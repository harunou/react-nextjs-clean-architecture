import { countSelector } from "@/selectors/countSelector";
import { incrementCountUseCase } from "@/useCases/incrementCount";

export async function POST(request: Request) {
  return controller(request);
}

const controller = async (request: Request) => {
  const data = (await request.json()) as { value: number };
  await incrementCountUseCase(data.value);
  return presenter();
};

const presenter = async () => {
  const count = await countSelector();
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
