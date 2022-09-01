import React, { useContext } from "react";
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

const FormComponent = () => {
  const validationSchema = yup.object({
    payer1: yup.string("Enter your email").min(2),
    payer2: yup.string("Enter your email").min(2),
  });

  const formik = useFormik({
    initialValues: {
      payer1: "",
      payer2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  const handleClose = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={true} onClose={handleClose}>
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
              id="payer1"
              label="Payer1 Name"
              name="payer1"
              autoComplete="payer1"
              autoFocus
              value={formik.values.payer1}
              onChange={formik.handleChange}
              error={formik.touched.payer1 && Boolean(formik.errors.payer1)}
              helperText={formik.touched.payer1 && formik.errors.payer1}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="payer2"
              label="Payer2 Name"
              type="payer2"
              id="payer2"
              autoComplete="payer2"
              value={formik.values.payer2}
              onChange={formik.handleChange}
              error={formik.touched.payer2 && Boolean(formik.errors.payer2)}
              helperText={formik.touched.payer2 && formik.errors.payer2}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
