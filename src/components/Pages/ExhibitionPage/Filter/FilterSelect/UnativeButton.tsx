export default function UnactiveButton({setIsActive, name}) {
  return <div onClick={() => setIsActive(name)}>unactive</div>;
}
