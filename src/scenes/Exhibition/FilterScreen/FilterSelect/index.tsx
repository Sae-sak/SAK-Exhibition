import { motion } from "framer-motion";

import { closeFilter, selectCategory } from "@features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

import { IProject } from "@type/exhibition";

import classNames from "classnames";
import HBorder from "@components/HBorder";
import FilterList from "../FilterComponents/FilterList";
import { CATEGORIES } from "@constants/filter";

export default function FilterSelect({ projects }: { projects: IProject[] }) {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  const dispatch = useAppDispatch();

  return (
    <div className="fixed top-0 w-screen h-screen col-start bg-light_bg_1 dark:bg-night_bg_1">
      {CATEGORIES.map((CATEGORY) => (
        <>
          <motion.div
            key={CATEGORY}
            className={classNames(
              "flex items-center justify-between w-full px-8",
              {
                "h-full font-bold": categoryName === CATEGORY,
              }
            )}
          >
            <span
              className="text-3xl transition-all cursor-pointer hover:font-bold"
              onClick={() =>
                dispatch(selectCategory({ categoryName: CATEGORY }))
              }
            >
              {CATEGORY}
            </span>
            {categoryName === CATEGORY && <FilterList projects={projects} />}
          </motion.div>
          <HBorder />
        </>
      ))}
      <i
        onClick={() => dispatch(closeFilter())}
        className="fixed text-4xl cursor-pointer top-4 right-8 ri-close-line"
      ></i>
    </div>
  );
}
