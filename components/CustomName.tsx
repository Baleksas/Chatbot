import React, { useState, ChangeEvent } from "react";
import { InitialState, useAppContext } from "../context/context";
import { useEffect } from "react";
import {
  Button,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";
const CustomName = () => {
  const [[nickname, setNickname], [storyMode, setStoryMode]] = useAppContext();
  const [tempNickname, setTempNickname] = useState(nickname);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempNickname(event.target.value);
  };
  useEffect(() => {
    setTempNickname(nickname);
    setInputMode(false);
  }, [nickname]);

  const [inputMode, setInputMode] = useState(false);

  const toggleInputMode = () => {
    if (tempNickname === "") return alert("Please enter a nickname");
    setNickname(tempNickname);
    setInputMode(!inputMode);
  };

  return (
    <div>
      {inputMode ? (
        <FormControl>
          <TextField
            type="text"
            label="Nickname"
            value={tempNickname}
            onChange={handleChange}
            variant="standard"
          />{" "}
        </FormControl>
      ) : (
        <span>{tempNickname}</span>
      )}

      <Button onClick={toggleInputMode}>
        {inputMode ? "Confirm" : "Edit"}
      </Button>
    </div>
  );
};

export default CustomName;
