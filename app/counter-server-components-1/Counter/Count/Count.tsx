import { JSX} from "react";
import { Controller } from "./Count.types";
import { componentMounted } from "./controller";

export async function Count(): Promise<JSX.Element> {
  const controller: Controller = {
    componentMounted,
  }

  const presenter = await controller.componentMounted();

  return (
    <>
      <div className="text-3xl font-bold text-gray-800">
        Count: {presenter.count}
      </div>
      <div className="text-3xl font-bold text-gray-800">
        Count x 5: {presenter.x5Count}
      </div>
    </>
  );
}
