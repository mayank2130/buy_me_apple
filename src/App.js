import CarouselCards from "./components/Card.tsx";
import CodeSnippetComponent from "./components/CodeSnippetComponent.tsx";

const App = () => {
  return (
    <div className="bg-slate-50 h-screen flex flex-col justify-center items-center mx-auto">
      <h1 className="font-serif text-2xl md:text-6xl top-28 absolute">
        Buy me a _______
      </h1>
      <CarouselCards />
      <CodeSnippetComponent />
    </div>
  );
};

export default App;
