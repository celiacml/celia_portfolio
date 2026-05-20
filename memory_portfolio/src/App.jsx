import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LiquidEther from "./components/LiquidEther";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>

      {/* Fond fixé derrière tout le contenu */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 0
      }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Contenu par-dessus */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </div>
  );
}