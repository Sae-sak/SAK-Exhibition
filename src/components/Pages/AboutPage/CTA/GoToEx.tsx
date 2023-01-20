import Link from "next/link";

export default function GoToEx() {
  return (
    <Link href="/exhibition">
      <button className="rounded-lg ">
        <div className="gap-4 p-4 row-center">
          <span className="">Go To Exhibition 2023</span>
          <i className="ri-arrow-right-line"></i>
        </div>
      </button>
    </Link>
  );
}
