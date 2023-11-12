import * as React from "react";
import Paper from "@mui/material/Paper";
import "../App.css";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import ProgressBar from "./ProgressBar";
import expand from "../assets/expand.svg";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
export default function Deposits({ title, data }) {
  const [open, setOpen] = React.useState(false);
  function capitalizeEachFirstWord(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      {data && (
        <div>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#302822",
              alignItems: "center",
              borderRadius: 0,
            }}
            style={{ borderBottom: "1px solid #694C2B" }}
          >
            <div style={{ color: "#F0E6DB" }}>Data Masuk Per Wilayah</div>
            <img
              src={expand}
              alt="logo"
              className="cursor-pointer"
              onClick={onOpen}
            />
            <Dialog
              open={open}
              onClose={onClose}
              fullWidth={true}
              maxWidth="xl"
            >
              <DialogTitle>Data Masuk Per Wilayah</DialogTitle>
              <DialogContent style={{ height: "100vh" }}>
                <Paper elevation={0} sx={{ p: 2 }}>
                  {data.map((item, i) => (
                    <Container
                      key={i}
                      maxWidth="false"
                      disableGutters
                      sx={{ mb: 1 }}
                    >
                      <Grid container>
                        <Grid item xs={3} sx={{ textAlign: "start" }}>
                          {item.title}
                        </Grid>
                        <Grid item xs={9}>
                          <ProgressBar
                            key={i}
                            bgcolor={item.bgcolor}
                            completed={item.completed}
                          />
                        </Grid>
                      </Grid>
                    </Container>
                  ))}
                </Paper>
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose}>
                  <CloseIcon style={{ marginRight: 4 }} /> Cancel
                </Button>
                <Button onClick={onClose} color="primary">
                  <CheckIcon style={{ marginRight: 4 }} /> OK
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>

          <Paper
            elevation={0}
            sx={{ p: 2, backgroundColor: "#29221D", borderRadius: 0 }}
          >
            {data.map((item, i) => (
              <Container key={i} maxWidth="false" disableGutters sx={{ mb: 1 }}>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid
                    item
                    xs={4}
                    sx={{ textAlign: "start", color: "#F8F3ED" }}
                  >
                    {capitalizeEachFirstWord(item.title)}
                  </Grid>
                  <Grid item xs={8}>
                    <ProgressBar
                      key={i}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                    />
                  </Grid>
                </Grid>
              </Container>
            ))}
          </Paper>
        </div>
      )}
    </React.Fragment>
  );
}
