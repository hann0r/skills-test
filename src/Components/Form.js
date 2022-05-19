import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const handleClick = () => {};

  return (
    <div className={styles.form}>
      <form>
        <input
          type="text"
          className={styles.fullName}
          id="input-name"
          placeholder="FULL NAME"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          className={styles.emailAddress}
          id="input-email"
          placeholder="EMAIL ADDRESS"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button
          className={styles.btn}
          type="submit"
          onClick={(e) => e.target.value}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
