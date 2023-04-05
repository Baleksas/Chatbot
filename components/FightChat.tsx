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

type FightChatProps = {
  userMessage: string;
  result: string;
};

const FightChat = ({ userMessage, result }: FightChatProps) => {
  return (
    <Box>
      <Stack spacing={2}>
        {userMessage && <Item>You: {userMessage}</Item>}
        {result && <Item>AI: {result}</Item>}
      </Stack>
    </Box>
  );
};

export default FightChat;
