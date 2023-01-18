import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen gap-8 col-center">
      <div className="gap-4 text-3xl font-bold row-center">
        <span className="">S.A.K</span>
        <span className="">|</span>
        <span className="">404 - Page Not Found</span>
      </div>
      <Link href="/">
        <button className="p-2 text-3xl border rounded">
          <span>Go Home</span>
        </button>
      </Link>
    </div>
  );
}
