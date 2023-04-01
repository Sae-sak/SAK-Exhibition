import NavLink from "./NavLink";

import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";

export default function NavLinks() {
  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-48 gap-4 col-start sm:mt-auto`}
    >
      <NavLink linkpath={"home"} name={"Home"} delay={0.1} />
      <NavLink linkpath={"about"} name={"About"} delay={0.2} />
      <NavLink linkpath={"exhibition"} name={"Exhibition"} delay={0.3} />
      <NavLink linkpath={"contactus"} name={"Contact Us"} delay={0.4} />
    </motion.nav>
  );
}
