import styles from "./FormInput.module.css";
import React from "react";
import Card from "./Card";
import Button from "@material-ui/core/Button";
const FormInput = function (props) {
  return (
    <Card>
      <label for="username">
        <h4>Username</h4>
      </label>
      <input type="text" name="username"></input>
      <label for="age">
        <h4>Age</h4>
      </label>
      <input type="text" name="age"></input>
      <Button
        style={{
          "margin-top": "2rem",
          width: "25%",
          height: "15%",
          "margin-left": "1rem",
          cursor: "pointer",
        }}
        size="small"
        variant="contained"
        color="secondary"
      >
        Add User
      </Button>
    </Card>
  );
};
export default FormInput;
