import * as React from "react";
import { motion, Reorder } from "framer-motion";
import { IStudio } from "public/data/studios";

interface Props {
  item: IStudio;
  isSelected: boolean;
  onClick: () => void;
}

export const Tab = ({ item, onClick, isSelected }: Props) => {
  return (
    <Reorder.Item
      value={item}
      id={item.studio}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: "#e3e3e3" }}
      className={`font-medium transition-all md:text-lg ${
        isSelected
          ? "border-y border-font_black dark:border-font_white"
          : "border-y border-transparent"
      }`}
      onPointerDown={onClick}
    >
      <motion.span layout="position">{`${item.studio}`}</motion.span>
    </Reorder.Item>
  );
};
