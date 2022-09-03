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
import Grid from "@mui/material/Grid";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import DialogTitle from "@mui/material/DialogTitle";
import { purple } from "@mui/material/colors";
import "./style.css";

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
    agree_terms: yup.boolean().oneOf([true], "required"),
  });

  const formik = useFormik({
    initialValues: {
      player1: "",
      player2: "",
      agree_terms: false,
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
        <Container
          sx={{ height: "auto" }}
          style={{ backgroundColor: "white", color: "blueviolet" }}
        >
          <DialogTitle>Payer Details</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              className="textfield"
              required
              fullWidth
              id="player1"
              label="Enter Player1 Name"
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
              label="Enter Player2 Name"
              type="player2"
              id="player2"
              autoComplete="player2"
              value={formik.values.player2}
              onChange={formik.handleChange}
              error={formik.touched.player2 && Boolean(formik.errors.player2)}
              helperText={formik.touched.player2 && formik.errors.player2}
            />
          </DialogContent>
          <DialogContent>
            <Grid item xs={12}>
              <Checkbox
                value="allowExtraEmails"
                color="primary"
                name="agree_terms"
                onChange={formik.handleChange}
              />
              Agree terms and conditions.
            </Grid>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "red",
              }}
            >
              {formik.touched.agree_terms && formik.errors.agree_terms}
            </Typography>
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
