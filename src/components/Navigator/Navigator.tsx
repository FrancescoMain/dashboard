import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../../redux/header/headerSlice";
import { useAppDispatch } from "../../redux/store";

const categories = [
  {
    id: "Build",
    children: [
      {
        id: "Authentication",
        icon: <PeopleIcon />,
        path: "/auth",
      },
      { id: "Projects", icon: <DnsRoundedIcon />, path: "/projects" },
      { id: "Storage", icon: <PermMediaOutlinedIcon />, path: "/storage" },
      { id: "Hosting", icon: <PublicIcon />, path: "/hosting" },
      { id: "Functions", icon: <SettingsEthernetIcon />, path: "/functions" },
      {
        id: "Machine learning",
        icon: <SettingsInputComponentIcon />,
        path: "/machineLearning",
      },
    ],
  },
  {
    id: "Quality",
    children: [
      { id: "Analytics", icon: <SettingsIcon />, path: "/analytics" },
      { id: "Performance", icon: <TimerIcon />, path: "/performance" },
      { id: "Test Lab", icon: <PhonelinkSetupIcon />, path: "/testLab" },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};
const Navigator = (props: DrawerProps) => {
  const [activeItem, setActiveItem] = useState("");
  const { ...other } = props;
  const dispatch = useAppDispatch();

  const handleActive = (id: string) => {
    setActiveItem(id);
    dispatch(setTitle(id));
  };

  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Paperbase
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path }) => (
              <ListItem
                onClick={() => navigate(path)}
                disablePadding
                key={childId}
              >
                <ListItemButton
                  onClick={() => handleActive(childId)}
                  sx={{
                    ...item,
                    bgcolor:
                      activeItem === childId
                        ? "rgba(255, 255, 255, 0.08)"
                        : "transparent",
                  }}
                  selected={activeItem === childId}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigator;
