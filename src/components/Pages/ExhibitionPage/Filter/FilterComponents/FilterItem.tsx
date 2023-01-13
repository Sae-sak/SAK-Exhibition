export default function FilterItem({setIsSetFilter, setIsFilter, filterName}) {
  return (
    <button
      className="cursor-pointer hover:text-red-600"
      onClick={() => {
        setIsSetFilter(filterName);
        setIsFilter(false);
      }}
    >
      <span>{filterName}</span>
    </button>
  );
}
