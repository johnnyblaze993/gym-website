import styles from "./App.module.scss";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Classes from "./pages/classes/Classes";
import Goals from "./pages/goals/Goals";
import GymInfo from "./pages/gymInfo/GymInfo";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <GymInfo />
      <Goals />
      <Classes />
    </div>
  );
}

export default App;
