import { JSX } from "react";
import { Presenter } from "./Count.types";
import { count } from "./presenter";
import { countSelector } from "../../../selectors/countSelector";

export async function Count(): Promise<JSX.Element> {
  const presenter: Presenter = {
    count,
    x5Count: async () => {
      const count = await countSelector();
      return count * 5;
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
