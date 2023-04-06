import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./components/Navigator/Navigator";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { store, useAppDispatch } from "./redux/store";
import { Provider } from "react-redux";
import { themeE } from "./defaultTheme";
import { setTab, setTitle } from "./redux/header/headerSlice";
import { updateRegistrationData } from "./redux/Auth/authSlice";
import { addUser } from "./redux/Auth/userSlice";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const drawerWidth = 256;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(themeE.breakpoints.up("sm"));
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setTitle("Authentication"));
    dispatch(setTab(0));
    const data = {
      username: "admin",
      email: "admin@admin.it",
      password: "code",
      confirmPassword: "code",
    };
    dispatch(updateRegistrationData(data));
    dispatch(addUser(data));
  }, [dispatch]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeE}>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <CssBaseline />
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            {isSmUp ? null : (
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            )}
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              sx={{ display: { sm: "block", xs: "none" } }}
            />
          </Box>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <Box
              component="main"
              sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
            >
              <Outlet />
            </Box>
            <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
              <Copyright />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
