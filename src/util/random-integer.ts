export default function randomInteger(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
