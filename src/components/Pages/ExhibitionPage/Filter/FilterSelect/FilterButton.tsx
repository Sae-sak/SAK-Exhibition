export default function FilterButton({setIsActive, name}) {
  return (
    <div className="gap-4 cursor-pointer row-center">
      <span className="text-4xl text-right" onClick={() => setIsActive(name)}>
        {name}
      </span>
      <i className="text-3xl ri-search-line"></i>
    </div>
  );
}
