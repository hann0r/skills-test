import React from "react";
import styles from "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          className="full-name"
          id="input-name"
          placeholder="FULL NAME"
        />
        <br />
        <input
          type="text"
          className="email-address"
          id="input-email"
          placeholder="EMAIL ADDRESS"
        />
        <br />
        <button className="btn" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
