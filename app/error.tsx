"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-background">
        <div className="rounded-lg bg-white p-6 shadow">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-foreground/80">{error.message}</p>
          <button className="mt-4 rounded bg-cta px-4 py-2 text-white" onClick={reset}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
