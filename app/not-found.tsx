import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-foreground/80">The page you’re looking for has moved or doesn’t exist.</p>
      <Link href="/" className="mt-4 text-cta underline">
        Return home
      </Link>
    </div>
  );
}
