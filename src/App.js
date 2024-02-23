import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Premium from "./components/Premium";

function App() {
  return (
    <div className="bg-[#f4f4f4] dark:bg-[#151515]">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="dishes">
          <Dishes />
        </div>
        <div id="premium">
          <Premium />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
