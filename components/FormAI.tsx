import React, { Fragment } from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const FormAI = () => {
  const [inputValue, setInputValue] = useState({
    firstArg: "",
    secondArg: "",
  });
  const [result, setResult] = useState();
  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstArg: inputValue.firstArg,
          secondArg: inputValue.secondArg,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log(data);
      setResult(data.result);
      setInputValue({ firstArg: "", secondArg: "" });
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="firstArg"
          placeholder="Enter ..."
          value={inputValue.firstArg}
          onChange={(e) =>
            setInputValue({
              ...inputValue,
              firstArg: e.target.value,
            })
          }
        />
        <input
          type="text"
          name="secondArg"
          placeholder="Enter ..."
          value={inputValue.secondArg}
          onChange={(e) =>
            setInputValue({
              ...inputValue,
              secondArg: e.target.value,
            })
          }
        />
        <input type="submit" value="GO!" />
      </form>
      <div className={styles.result}>{result}</div>
    </Fragment>
  );
};

export default FormAI;
