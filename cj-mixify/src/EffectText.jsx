import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
const EffectText = ({ words, speed = 0.05 }) => {
  const refs = useRef();
  const { inViewport } = useInViewport(refs);
  var list = [];
  for (let i of words) {
    list.push(i);
  }
  const prints = {
    hidden: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        type: "tween",
        duration: 0.3,
        delay: 0.3,
        stiffness: 400,
        staggerChildren: speed,
      },
    },
  };
  const children = {
    hidden: { opacity: 0 },
    anim: { opacity: 1 },
  };
  return (
    <div ref={refs}>
      {inViewport && (
        <motion.div
          variants={prints}
          initial="hidden"
          animate="anim"
          className="flex flex-wrap"
        >
          {list.map((e, i) => {
            if (e == " ") {
              e = "\u00A0";
            }
            return <motion.p variants={children} key={i}> {e}</motion.p>;
          })}
        </motion.div>
      )}
    </div>
  );
};

export default EffectText;
