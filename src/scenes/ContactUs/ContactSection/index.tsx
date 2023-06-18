import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";

import Clock from "./Clock";
import ContactUsForm from "./ContactUsForm";

export default function ContactSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="w-full gap-20 md:gap-10 lg:gap-20 py-20 md:py-0 md:px-5 lg:px-20 col-center md:flex md:justify-between md:flex-row"
      viewport={{ once: true }}
    >
      <Clock />

      {/* vborder */}
      <div className="hidden md:block">
        <div className={`border-r-[1px] h-96 w-[1px]`}></div>
      </div>

      {/* hborder */}
      <div className="w-full md:hidden">
        <div className="border-t-[1px] h-[1px] w-full"></div>
      </div>

      <ContactUsForm />
    </motion.div>
  );
}
