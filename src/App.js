import Globals from "./abstracts/Globals";
import Showcase from "./components/Showcase";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Globals />
      <main>
        <Showcase />
        <About />
      </main>
    </>
  );
};

export default App;
