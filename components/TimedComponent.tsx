import React from "react";
import { useState } from "react";
import { Typography, Fade } from "@mui/material";

const TimedComponent = () => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
  }, 3000);
  return (
    <>
      <Fade in={visible}>
        <Typography variant="h6" margin={2}>
          There's no way back now.
        </Typography>
      </Fade>
    </>
  );
};

export default TimedComponent;
