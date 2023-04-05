import { Button, Paper } from "@mui/material";
import React from "react";
import { Container, Top, Icon, Bot, Title, SubTitle } from "./style";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addPresenza } from "../../redux/Auth/userSlice";

const Storage = () => {
  const loginUser = useAppSelector((state) => state.auth.login);
  const users = useAppSelector((state) => state.users);
  const dispatch = useDispatch();
  const entrata = () => {
    if (loginUser) {
      const user = users.find((user) => user.email === loginUser.email);
      const timestamp = Date.now();
      const data = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(timestamp);
      const presenza = { inizio: data, fine: "" };
      const presenzaPayload = { ...user, presenza };
      dispatch(addPresenza(presenzaPayload));
    }
  };

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
            onClick={entrata}
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
