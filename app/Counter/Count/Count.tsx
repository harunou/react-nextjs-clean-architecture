import { getCount } from "./presenter";

export async function Count() {
  const count = await getCount();
  return <div className="text-3xl font-bold text-gray-800">Count: {count}</div>;
}
