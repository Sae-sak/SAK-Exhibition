export default function UnactiveButton({setIsActive, name}) {
  return (
    <div className="text-white" onClick={() => setIsActive(name)}>
      unactive
    </div>
  );
}
