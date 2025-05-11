import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
        <li>
          <Link href="/counter-server-components">
            Counter Server Components
          </Link>
        </li>
        <li>
          <Link href="/counter-client-components">
            Counter Client Components
          </Link>
        </li>
      </ul>
    </main>
  );
}
