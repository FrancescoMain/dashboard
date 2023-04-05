import { Button, Paper } from "@mui/material";
import React from "react";
import { Container, Top, Icon, Bot, Title, SubTitle } from "./style";
import IosShareIcon from "@mui/icons-material/IosShare";

const Storage = () => {
  const timestamp = Date.now();
  console.log(timestamp);
  console.log(
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp)
  );

  return (
    <Container>
      <Paper sx={{ width: "550px", minHeight: "550px" }}>
        <Top>
          <Icon></Icon>
        </Top>
        <Bot>
          <Title>Title</Title>
          <SubTitle>Sottotitolo</SubTitle>
          <span>Ore Di Lavoro Odierne: 00:00</span>
          <Button
            variant="outlined"
            sx={{ backgroundColor: "#ffc107", margin: "20px" }}
          >
            <IosShareIcon sx={{ fontSize: "150px", color: "black" }} />
          </Button>
          <span>Fai click per entrare</span>
        </Bot>
      </Paper>
    </Container>
  );
};

export default Storage;
