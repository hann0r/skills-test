import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <form>
        <input
          type="text"
          className={styles.fullName}
          id="input-name"
          placeholder="FULL NAME"
        />
        <br />
        <input
          type="email"
          className={styles.emailAddress}
          id="input-email"
          placeholder="EMAIL ADDRESS"
        />
        <br />
        <button className={styles.btn} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
