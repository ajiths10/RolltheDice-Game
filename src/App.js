import React, { useEffect, useState } from "react";
import "./App.css";
import FormComponent from "./component/formComponent";
import { Route, Routes } from "react-router-dom";
import Dice from "./component/Dice/index";

const App = () => {
  const [formikValues, setFormikValues] = useState("");

  const fieldFunction = (payload) => {
    setFormikValues(payload);
  };

  return (
    <div className="App">
      <FormComponent fieldFunction={fieldFunction} />
      <Routes>
        <Route path="/dice" element={<Dice formikValues={formikValues} />} />
      </Routes>
    </div>
  );
};

export default App;
