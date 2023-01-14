import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <h1>React + TypeScript + Webpack</h1>
    </div>
  );
}

export default App;
