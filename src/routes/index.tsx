import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h1>Portfolio is alive 🚀</h1>
        <p>If you can read this, TanStack Start is working.</p>
      </div>
    </div>
  );
}