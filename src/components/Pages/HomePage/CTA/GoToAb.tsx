import Link from "next/link";

export default function GoToAb() {
  return (
    <Link href="/exhibition">
      <button className="rounded-lg bg-sak_main_olivegreen">
        <div className="gap-4 p-4 row-center">
          <span className="text-white">Go To About</span>
          <i className="text-white ri-arrow-right-line"></i>
        </div>
      </button>
    </Link>
  );
}
