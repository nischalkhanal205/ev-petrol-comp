import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import "./index.css";
import { initialFormState } from "./state/formState";
import { FormContext } from "./state/formContext";

function App() {
  const [formState, setFormState] = React.useState(initialFormState);

  return (
    <FormContext.Provider
      value={[formState, setFormState ]}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FormContext.Provider>
  );
}

export default App;
