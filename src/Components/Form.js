import React from "react";
import styles from "./Form.css";

const Form = () => {
  return (
    <form>
      <input type="text" className="full-name" placeholder="FULL NAME" />
      <br />
      <input
        type="text"
        className="email-address"
        placeholder="EMAIL ADDRESS"
      />
      <br />
      <button className="btn" type="submit">
        Next
      </button>
    </form>
  );
};

export default Form;
