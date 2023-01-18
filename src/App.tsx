import styles from "./App.module.scss";
import ColorBlock from "./components/colorblock/ColorBlock";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Classes from "./pages/classes/Classes";
import Goals from "./pages/goals/Goals";
import GymInfo from "./pages/gymInfo/GymInfo";
import Join from "./pages/join/Join";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <ColorBlock />
      <GymInfo />
      <Goals />
      <ColorBlock />
      <Classes />
      <ColorBlock />
      <Join />
      <ColorBlock />
      <Footer />
    </div>
  );
}

export default App;
