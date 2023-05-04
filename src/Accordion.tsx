import { motion, AnimatePresence } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

const Accordion = ({ question, answer }: FAQ) => {
  return (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-between w-full mb-1 text-base font-semibold text-left cursor-pointer md:text-xl text-neutral-800">
            {question}{" "}
            <motion.span
              whileHover={{ backgroundColor: "rgb(161 161 170 / 0.3)" }}
              initial={{ backgroundColor: "transparent" }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{
                duration: 0.15,
                type: "tween",
              }}
              className="p-2 rounded-full text-neutral-950"
            >
              <ArrowSmallDownIcon className="w-5 h-5" />
            </motion.span>
          </Disclosure.Button>
          <AnimatePresence>
            <Disclosure.Panel
              as={motion.div}
              initial={{ y: -20, opacity: 0.2 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -20,
                opacity: 0.2,
                transition: { duration: 0.2, type: "tween" },
              }}
              transition={{
                duration: 0.15,
                type: "tween",
              }}
              className="text-sm text-neutral-700"
            >
              {answer}
            </Disclosure.Panel>
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
