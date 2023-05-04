import Accordian from "./Accordion";

const faqs: FAQ[] = [
  {
    question: "Is vite the best bundler ?",
    answer: `It's difficult to say whether ViteJS is the "best" bundler out there, as it ultimately depends on your specific needs and preferences. ViteJS has gained popularity due to its fast development server and quick build times, which can be beneficial for certain types of projects.`,
  },
  {
    question: "Why should I start using headlessui ?",
    answer:
      "HeadlessUI provides fully accessible, unstyled UI components that are flexible and customizable, can be used with any front-end framework, and are lightweight for optimal performance.",
  },
];

function App() {
  return (
    <main className="grid min-h-screen bg-fuchsia-400 place-items-center font-inter">
      <div className="bg-neutral-50 rounded-xl backdrop-blur-xl mx-4 md:mx-0 md:w-[70vw] p-8 md:p-12 min-h-[70vh]">
        <h1 className="mb-8 text-xl font-extrabold md:text-3xl text-neutral-950">
          Faqs section built with{" "}
          <a
            target="_blank"
            rel="norefer"
            href="https://headlessui.com/"
            className="text-blue-600 transition hover:underline underline-offset-4"
          >
            headlessui
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="norefer"
            href="https://framer.com/motion"
            className="text-blue-600 transition hover:underline underline-offset-4"
          >
            framer-motion
          </a>
        </h1>
        <ul className="flex flex-col gap-4 mb-8">
          {faqs.map((faq, index) => (
            <Accordian key={index} {...faq} />
          ))}
        </ul>
        <p className="mb-2 text-sm md:text-lg">
          Want to know how to build this ? Click{" "}
          <a
            target="_blank"
            rel="norefer"
            href="https://dev.to/bhendi/how-to-build-an-accordion-with-headlessui-framer-motion-and-tailwindcss-62h"
            className="text-blue-600"
          >
            here
          </a>{" "}
          to find out.
        </p>
        <p className="text-sm md:text-lg">
          Grab the source code on{" "}
          <a
            target="_blank"
            rel="norefer"
            href="https://github.com/bhendi-boi/accordian"
            className="text-blue-600"
          >
            github
          </a>{" "}
          .
        </p>
      </div>
    </main>
  );
}

export default App;
