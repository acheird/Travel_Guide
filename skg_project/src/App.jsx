import "./App.css";
import { Navbar } from "./components";
import {
  About,
  What2do,
  Intro,
  Blog,
  Gallery,
  NewsLetter,
  Footer,
} from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <What2do />
      <Intro />
      <Blog />
      <Gallery />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
