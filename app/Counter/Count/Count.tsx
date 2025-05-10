import { JSX } from "react";
import { Presenter } from "./Count.types";
import { count } from "./presenter";
import { xNCountSelector } from "./xNCountSelector";

export async function Count(): Promise<JSX.Element> {
  const presenter: Presenter = {
    count,
    x5Count: () => {
      return xNCountSelector(5);
    },
  };
  return (
    <>
      <div className="text-3xl font-bold text-gray-800">
        Count: {await presenter.count()}
      </div>
      <div className="text-3xl font-bold text-gray-800">
        Count x 5: {await presenter.x5Count()}
      </div>
    </>
  );
}
