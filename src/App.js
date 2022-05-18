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
        <footer className={styles.footer}>
          <div className={styles.timeRemaining}>
            <p className={styles.time}>time remaining</p>
          </div>
          <div className={styles.timeValues}>
            <p className={styles.minTime}>51</p>
            <p className={styles.minutes}>minutes</p>
            <p className={styles.secTime}>39</p>
            <p className={styles.seconds}>seconds</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
