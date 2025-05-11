"use client";

import {
  JSX,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { Count } from "./Count/Count";
import {
  addButtonClicked,
  componentMounted,
  removeButtonClicked,
} from "./controller";

export function Counter(): JSX.Element | null {
  const [count, setCount] = useState(0);
  const [
    addButtonClickedState,
    addButtonClickedAction,
    addButtonClickedPending,
  ] = useActionState(addButtonClicked, count);
  const [
    removeButtonClickedState,
    removeButtonClickedAction,
    removeButtonClickedPending,
  ] = useActionState(removeButtonClicked, count);

  useEffect(() => {
    const initialize = async () => {
      const count = await componentMounted();
      setCount(count);
    };
    initialize();
  }, [setCount]);

  useEffect(() => {
    setCount(addButtonClickedState);
  }, [addButtonClickedState]);

  useEffect(() => {
    setCount(removeButtonClickedState);
  }, [removeButtonClickedState]);

  const a = async () => {
    const d = await addButtonClicked();
    setCount(d);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white p-6 rounded-lg shadow-md">
        <pre className="bg-gray-200 text-black font-mono p-2 rounded overflow-x-auto w-full max-w-md text-sm mb-2 min-w-[350px]">
          {JSON.stringify(
            {
              addButtonClickedState,
              addButtonClickedPending,
              removeButtonClickedState,
              removeButtonClickedPending,
              count,
            },
            null,
            " "
          )}
        </pre>
        <Count />
        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition cursor-pointer"
            onClick={() => a()}
          >
            Add
          </button>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition cursor-pointer"
            onClick={() => startTransition(() => addButtonClickedAction())}
          >
            Add
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 transition cursor-pointer"
            onClick={() => startTransition(() => removeButtonClickedAction())}
          >
            Remove
          </button>
        </div>
      </main>
    </div>
  );
}
