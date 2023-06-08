export default function Logo() {
  return (
    <div className="gap-2 row-center group">
      <div className="relative z-10 row-center">
        <span className="text-2xl leading-4 transition-all font-accent border-y">
          SAK-E
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 10"
          className="absolute -top-[37px] -left-[0px] text-2xl font-bold overflow-visible"
        >
          <text className="text-xl font-bold">SAK-E</text>
        </svg>
      </div>
    </div>
  );
}
