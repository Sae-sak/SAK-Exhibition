import { motion } from "framer-motion";
import { initialTabs } from "public/data/studios";
import { AnimatePresence, Reorder } from "framer-motion";
import { useState } from "react";
import { Tab } from "./Tab";
import { textVariant } from "@util/variants";
import { staggerContainer } from "@util/variants/container";

export default function Points() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="py-8 border-b flex flex-col gap-8 justify-between"
    >
      <motion.h1
        variants={textVariant(0.9)}
        className="text-2xl md:text-3xl font-accent"
      >
        Player List
      </motion.h1>

      <div className="flex items-center justify-between">
        <motion.nav variants={textVariant(1.1)} className="">
          <Reorder.Group
            as="ul"
            axis="x"
            onReorder={setTabs}
            className="w-44 col-start gap-2"
            values={tabs}
          >
            <AnimatePresence initial={false}>
              {tabs.map((item) => (
                <Tab
                  key={item.studio}
                  item={item}
                  isSelected={selectedTab === item}
                  onClick={() => setSelectedTab(item)}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </motion.nav>
        <motion.main variants={textVariant(1.3)}>
          <AnimatePresence mode="wait">
            <motion.ul
              key={selectedTab.studio}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
              className="w-full flex items-start justify-end gap-4 flex-wrap"
            >
              {selectedTab.players.map((player, indx) => (
                <li key={player + indx}>{player}</li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </motion.main>
      </div>
    </motion.div>
  );
}
