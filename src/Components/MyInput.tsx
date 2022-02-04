import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ".//MyInput.css";

const FormTextField = function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="container__input">
        <div className="container__input-name">
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue="Login"
          />

          <TextField
            id="outlined-password-input"
            required
            label="Password"
            defaultValue="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
      </div>
    </Box>
  );
};
export default FormTextField;
