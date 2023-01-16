import styles from "./App.module.scss";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
