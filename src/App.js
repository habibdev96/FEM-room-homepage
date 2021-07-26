import Globals from "./abstracts/Globals";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Tag from "./components/Tag";

const App = () => {
  return (
    <>
      <Globals />
      <main>
        <Showcase />
        <About />
      </main>
      <Tag />
    </>
  );
};

export default App;
