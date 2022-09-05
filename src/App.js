import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import "./App.css";
import FormComponent from "./component/formComponent";

const App = () => {
  const [formikValues, setFormikValues] = useState("");

  const fieldFunction = (payload) => {
    setFormikValues(payload);
  };

  return <div className="App">
     <FormComponent fieldFunction={fieldFunction} formikValues={formikValues}/>
     
  </div>;
};

export default App;
