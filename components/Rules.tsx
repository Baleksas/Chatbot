import React from "react";
import { Typography, Button } from "@mui/material";
import { useState } from "react";

const Rules = ({ nickname }: any) => {
  return (
    <Typography marginBottom={2} align="center">
      Once upon a time there was an epic adventure waiting to be taken.{" "}
      <b>{nickname}</b> has been chosen to take on this adventure. Will you
      accept?
    </Typography>
  );
};

export default Rules;
