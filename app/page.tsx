import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
        <li>
          <Link href="/counter-server-components-0">
            Counter Server Components 0
          </Link>
        </li>
        <li>
          <Link href="/counter-server-components-1">
            Counter Server Components 1
          </Link>
        </li>
        <li>
          <Link href="/counter-client-components-0">
            Counter Client Components 0
          </Link>
        </li>
        <li>
          <Link href="/counter-client-components-1">
            Counter Client Components 1
          </Link>
        </li>
        <li>
          <Link href="/counter-client-components-2">
            Counter Client Components 2
          </Link>
        </li>
      </ul>
    </main>
  );
}
