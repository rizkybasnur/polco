import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import ListItems from "./listItems";
import logo from "../assets/logo.svg";
import logoOnly from "../assets/logoOnly.svg";
// import { UserContext } from "../context/UserContext";

import {
  Avatar,
  Button,
  ListItemButton,
  ListItemText,
  Popover,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  useMediaQuery,
  AppBar,
  Drawer,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logoutlogo from "../assets/logout.svg";
import warning from "../assets/warning.svg";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [isDialogLogout, setIsDialogLogout] = React.useState(false);

  const toggleLogout = () => {
    setIsDialogLogout(true);
  };

  const isXs = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/login");
    setIsDialogLogout(false);
  };

  // React.useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);

  const onClose = () => {
    setIsDialogLogout(false);
  };

  const drawerWidth = 280;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const defaultTheme = createTheme({
    palette: {
      error: {
        main: "#FF5A72",
      },
      grey: {
        main: "#D0D5DD",
      },
      primary: {
        main: "#946B3D",
      },
      search: {
        main: "#E68014",
      },
      success50: {
        main: "#ECFDF3",
      },
      success700: {
        main: "#027A48",
      },
      warnin50: {
        main: "#FFFAEB",
      },
      warning700: {
        main: "#B54708",
      },
      blue: {
        main: "#01A3F8",
        contrastText: "#fff",
      },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };
  const { isLoggedIn, username, login, logout } = React.useContext(UserContext);

  const openUser = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#29221D",
            borderBottom: "1px solid #48341E",
          }}
        >
          <Toolbar>
            {isXs && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <img src={logoOnly} alt="logo" />
              </IconButton>
            )}
            {/* <IconButton
              edge="start"
              color="black"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
              }}
            >
              {open ? (
                <img src={arrowLeft} alt="logo" />
              ) : (
                <img src={arrowRight} alt="logo" />
              )}
            </IconButton> */}
            <Typography
              component="h1"
              variant="h6"
              color="black"
              noWrap
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Paper
              elevation={0}
              className="cursor-pointer"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#29221D",
              }}
              onClick={handleClick}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#101828",
                }}
              >
                <Avatar
                  sx={{ mr: 2, width: 40, height: 40 }}
                  src={logo}
                ></Avatar>
                <div style={{ marginRight: 4, color: "#F0E6DB" }}>
                  {username.nama}
                </div>{" "}
                {anchorEl ? (
                  <ExpandLess style={{ color: "#F0E6DB" }} />
                ) : (
                  <ExpandMore style={{ color: "#F0E6DB" }} />
                )}
              </Button>
            </Paper>
            <Popover
              id={id}
              open={openUser}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            backgroundColor: "#29221D",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            // mobile
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              backgroundColor: "#29221D",
              display: { xs: "flex", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                backgroundColor: "#29221D",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                m={4}
              >
                <img src={logo} alt="logo" />
              </Box>
              <List component="nav">
                <ListItems />
              </List>
            </div>
            <List
              sx={{ color: "#48341E", backgroundColor: "#29221D" }}
              style={{ padding: 0 }}
            >
              <ListItemButton
                sx={{ color: "#48341E", backgroundColor: "#29221D" }}
                onClick={toggleLogout}
              >
                <img src={logoutlogo} alt="logo" />
                <ListItemText
                  primary="Logout"
                  style={{ color: "#F8F3ED" }}
                  sx={{ pl: 2 }}
                />
              </ListItemButton>
            </List>
          </Drawer>

          <Drawer
            // web
            variant="permanent"
            onClose={toggleDrawer}
            open={open}
            sx={{
              display: { xs: "none", sm: "flex" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#694C2B",
              },
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                backgroundColor: "#29221D",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                m={4}
              >
                <img src={logo} alt="logo" />
              </Box>
              <List component="nav">
                <ListItems />
              </List>
            </div>
            <List
              sx={{ color: "#48341E", backgroundColor: "#29221D" }}
              style={{ padding: 0 }}
            >
              <ListItemButton
                sx={{ color: "#48341E", backgroundColor: "#29221D" }}
                onClick={toggleLogout}
              >
                <img src={logoutlogo} alt="logo" />
                <ListItemText
                  primary="Logout"
                  style={{ color: "#F8F3ED" }}
                  sx={{ pl: 2 }}
                />
              </ListItemButton>
            </List>
          </Drawer>
        </Box>

        <Dialog
          open={isDialogLogout}
          onClose={onClose}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "400px", // Set your width here
              },
            },
          }}
          PaperProps={{ sx: { borderRadius: "12px" } }}
        >
          <DialogContent sx={{ p: 2 }}>
            <img src={warning} alt="logo" width={48} />
            <div>Keluar Aplikasi</div>
            <div>Apakah Anda yakin ingin keluar?</div>
          </DialogContent>
          <DialogActions sx={{ p: 2, pt: 0 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Button
                  onClick={onClose}
                  color="grey"
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    color: "black",
                  }}
                >
                  Batal
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  onClick={onLogout}
                  sx={{
                    textTransform: "none",
                    width: "100%",
                  }}
                  color="error"
                  variant="contained"
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>

        <main style={{ width: "100%" }}>
          <div>
            <Outlet />
          </div>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default ResponsiveDrawer;
