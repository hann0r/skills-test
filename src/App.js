import React, { useState } from "react";
import styles from "./App.module.css";
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
        </header>
        <main className={styles.main}>
          <Form />
        </main>
        <footer className={styles.footer}>
          <div className={styles.timeRemaining}>
            <p>time remaining</p>
          </div>
          <div className={styles.timeValues}>
            <p className={styles.minTime}>51</p>
          </div>
          <div className={styles.timeLength}>
            <p>minutes</p>
          </div>
          <div className={styles.timeValues}>
            <p className={styles.secTime}>39</p>
          </div>
          <div className={styles.timeLength}>
            <p>seconds</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
