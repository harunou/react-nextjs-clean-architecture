import { JSX } from "react";
import { PresenterInt } from "./Count.types";
import { xNCountSelector } from "./xNCountSelector";

export async function Count(): Promise<JSX.Element> {
  const presenter: PresenterInt = {
    count: await xNCountSelector(),
    x5Count: await xNCountSelector(5),
  };
  return (
    <>
      <div className="text-3xl font-bold text-gray-800">Count: {presenter.count}</div>
      <div className="text-3xl font-bold text-gray-800">
        Count x 5: {presenter.x5Count}
      </div>
    </>
  );
}
