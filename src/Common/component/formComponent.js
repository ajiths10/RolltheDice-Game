import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const FormComponent = ({ fieldFunction }) => {
  const [isInitialRun, setInitialRun] = useState(true);

  const validationSchema = yup.object({
    player1: yup.string("Enter your email").min(2).required("Name is required"),
    player2: yup.string("Enter your email").min(2).required("Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      player1: "",
      player2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      fieldFunction(values);
      setInitialRun(false);
    },
  });
  const handleClose = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isInitialRun} onClose={handleClose}>
        <DialogTitle>Payer Details</DialogTitle>

        <Container
          sx={{ height: "50vh" }}
          style={{ backgroundColor: "#2f2f2f" }}
        >
          <DialogContent>
            <TextField
              margin="normal"
              required
              fullWidth
              id="player1"
              label="Player1 Name"
              name="player1"
              autoComplete="player1"
              autoFocus
              value={formik.values.player1}
              onChange={formik.handleChange}
              error={formik.touched.player1 && Boolean(formik.errors.player1)}
              helperText={formik.touched.player1 && formik.errors.player1}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="player2"
              label="Player2 Name"
              type="player2"
              id="player2"
              autoComplete="player2"
              value={formik.values.player2}
              onChange={formik.handleChange}
              error={formik.touched.player2 && Boolean(formik.errors.player2)}
              helperText={formik.touched.player2 && formik.errors.player2}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={formik.handleSubmit}
            >
              Let's play
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormComponent;
