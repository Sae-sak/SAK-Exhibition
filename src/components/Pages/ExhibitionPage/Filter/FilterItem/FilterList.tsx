export default function FilterList({isActive, setIsFilter, names}) {
  return (
    <>
      {names.map((name) => {
        return isActive === name ? (
          <div
            onClick={() => setIsFilter("")}
            className="fixed top-0 w-screen h-screen bg-slate-900/50 col-center"
          >
            <div>{name}</div>
          </div>
        ) : null;
      })}
    </>
  );
}
