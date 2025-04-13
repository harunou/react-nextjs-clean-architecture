import { Presenter } from "./Count.types";
import { getCount, getX5Count } from "./presenter";

export async function Count() {
  const count: Presenter.Count = await getCount();
  const x5Count = getX5Count();
  return (
    <>
      <div className="text-3xl font-bold text-gray-800">Count: {count}</div>
      <div className="text-3xl font-bold text-gray-800">
        Count x 5: {await x5Count}
      </div>
    </>
  );
}
