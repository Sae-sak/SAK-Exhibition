import Link from "next/link";

export default function GoToEx() {
  return (
    <Link href="/exhibition">
      <button className="rounded-lg bg-sak_main_olivegreen">
        <div className="gap-4 p-4 row-center">
          <span className="text-white">Go To Exhibition 2023</span>
          <i className="text-white ri-arrow-right-line"></i>
        </div>
      </button>
    </Link>
  );
}
