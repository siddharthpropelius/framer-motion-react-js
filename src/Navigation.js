import * as React from "react";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};
const menus = [
  {
    id: 1,
    name: "home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "about",
    icon: <AiOutlineHome />,
  },
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {menus.map((i) => (
      <motion.li
        style={{ display: "flex", gap: "12px" }}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        key={i.id}
      >
        {i.icon}
        <h1>{i.name.toUpperCase()}</h1>
      </motion.li>
    ))}
  </motion.ul>
);
