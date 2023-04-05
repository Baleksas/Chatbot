import React from "react";
import { TextField, Stack, Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FightChat = ({ result }: any) => {
  return (
    <Box>
      <Stack spacing={2}>
        <Item>AI:</Item>
        <Item>You:</Item>
      </Stack>
      <Typography>Sample text</Typography>
    </Box>
  );
};

export default FightChat;
