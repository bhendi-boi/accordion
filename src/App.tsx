function App() {
  return (
    <main className="min-h-screen bg-fuchsia-400 grid place-items-center">
      <div className="h-48 bg-white p-8 rounded-lg backdrop-blur-lg">
        <h1 className="mb-8 font-sans text-2xl font-bold text-gray-900">
          React Starter template with tailwind
        </h1>
        <p>
          Visit the{" "}
          <a
            target="_blank"
            rel="norefer"
            href="https://github.com/bhendi-boi/vite-tailwind-starter-template"
            className="cursor-pointer text-blue-600 font-medium"
          >
            git repo
          </a>{" "}
          .
          <br />
          If you found this useful dont forget to give it a ⭐ on github.
        </p>
      </div>
    </main>
  );
}

export default App;
