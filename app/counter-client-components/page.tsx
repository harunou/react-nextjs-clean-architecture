import { Counter } from "./Counter/Counter";
import Link from "next/link";

export default function CounterPage() {
  return (
    <main>
      <Link href="/">Home</Link>
      <Counter />
    </main>
  );
}
