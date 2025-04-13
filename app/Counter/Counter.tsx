import { addButtonClicked, removeButtonClicked } from "./controller";
import { Count } from "./Count/Count";

export default async function Counter() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white p-6 rounded-lg shadow-md">
        <Count />
        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition cursor-pointer"
            onClick={addButtonClicked.bind(null, 2)}
          >
            Add
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 transition cursor-pointer"
            onClick={removeButtonClicked}
          >
            Remove
          </button>
        </div>
      </main>
    </div>
  );
}
