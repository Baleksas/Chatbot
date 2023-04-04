import React from "react";
import randomChoiceMessage from "../lib/choiceMessages";
import { useAppContext } from "../context/context";

const Greeting = () => {
  const [nickname, setNickname] = useAppContext();

  const randomNumber = Math.floor(Math.random() * randomChoiceMessage.length);
  return (
    <code
      style={{
        fontSize: "18px",
        textAlign: "center",
      }}
    >
      {randomChoiceMessage[randomNumber]}
      <br />
      <h2>{nickname}</h2>
    </code>
  );
};

export default Greeting;
