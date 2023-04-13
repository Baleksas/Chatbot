import React from "react";
import { useState } from "react";
import { Typography, Fade } from "@mui/material";

const TimedComponent = ({ text }: { text: string }) => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
  }, 3000);
  return (
    <>
      <Fade in={visible}>
        <Typography variant="h6" margin={2}>
          {text}
        </Typography>
      </Fade>
    </>
  );
};

export default TimedComponent;
