import { motion } from "framer-motion";

export default function AccentChar({
  char,
  color,
}: {
  char: string;
  color: string;
}) {
  return (
    <motion.span layoutId={char} className={`text-2xl ${color}`}>
      {char}
    </motion.span>
  );
}
