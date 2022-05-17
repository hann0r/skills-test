import React from "react";
import styles from "./Component.module.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className={styles.app}>
      <div className="App">
        <div className={styles.backgroundImage} />
        <header className={styles.header}>
          <h1 className={styles.title}>plant a tree</h1>
          <h2 className={styles.subHeading}>
            UK residents only, aged 18+. <br></br>1 entry per person. No
            purchase necessary.
          </h2>
          <div className={styles.form}>
            <Form />
          </div>
        </header>
        <footer>
          <p className={styles.time}>time remaining</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
