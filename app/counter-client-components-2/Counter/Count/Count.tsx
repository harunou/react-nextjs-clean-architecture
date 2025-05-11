"use client";

import { JSX } from "react";
import { usePresenter } from "./usePresenter";

export function Count(): JSX.Element {
  const presenter = usePresenter();
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
