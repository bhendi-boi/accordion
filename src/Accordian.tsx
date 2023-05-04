import { Disclosure } from "@headlessui/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

const Accordian = ({ question, answer }: FAQ) => {
  return (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <Disclosure.Button className="font-semibold text-xl inline-flex items-center cursor-pointer justify-between w-full mb-1">
            {question}{" "}
            <span
              className={`p-2 hover:bg-zinc-400/30 rounded-full ${
                open ? "rotate-180" : ""
              }`}
            >
              <ArrowSmallDownIcon className="w-5 h-5" />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-sm">{answer}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Accordian;
