import { About } from "./components/About";
import { Contact } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Techs } from "./components/Technologies";
import "./styles/globals.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <Techs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
