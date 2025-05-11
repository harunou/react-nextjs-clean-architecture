"use client";

import { JSX } from "react";

export function Count(): JSX.Element | null {
  return (
    <>
      <div className="text-3xl font-bold text-gray-800">Count: {0}</div>
      <div className="text-3xl font-bold text-gray-800">Count x 5: {0}</div>
    </>
  );
}
