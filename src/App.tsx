import Accordian from "./Accordian";

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
    <main className="min-h-screen bg-fuchsia-400 grid place-items-center font-inter">
      <ul className="bg-white rounded-lg backdrop-blur-lg w-[60vw] p-12 min-h-[60vh] flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <Accordian key={index} {...faq} />
        ))}
      </ul>
    </main>
  );
}

export default App;
