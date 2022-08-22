import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Paper,
  Modal,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const updateformData = e => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const signUp = e => {
    const { firstname, lastname, email, password } = formData;

    if (firstname === "" || firstname === null) {
      alert("Enter the valid First Name");
    } else if (lastname === "" || lastname === null) {
      alert("Enter the Valid Last Name");
    } else if (email === "" || email === null) {
      alert("Enter the Valid Email");
    } else if (password === "" || password === null) {
      alert("Enter the Valid Password");
    } else {
      axios
        .post("http://localhost:5000/signup", formData)
        .then(response => {
          if (response.data.user) {
            alert(response.data.message);
            e.preventDefault();
          } else {
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  return (
    <Modal open>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          style={{
            height: "70vh",
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper elevation={5} style={{ padding: "15px" }}>
            <h1> Create a new account </h1>
            <p> Use your email to create a new account</p>

            <form action="/" onSubmit={signUp}>
              <TextField
                label="First Name"
                margin="normal"
                name="firstname"
                value={formData.firstname}
                onChange={updateformData}
                fullWidth
                required
              />
              <TextField
                label="Last Name"
                margin="normal"
                name="lastname"
                value={formData.lastname}
                onChange={updateformData}
                fullWidth
                required
              />
              <TextField
                label="Email Address"
                margin="normal"
                type="email"
                name="email"
                value={formData.email}
                onChange={updateformData}
                fullWidth
                required
              />
              <TextField
                label="Password"
                margin="normal"
                type="password"
                name="password"
                value={formData.password}
                onChange={updateformData}
                fullWidth
                required
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="isParmanent"
                    label="I have read the"
                    required
                  />
                }
              />
              <label htmlFor="terms">
                I have read the <a href="#">Terms and Condtions</a>
              </label>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ marginTop: "10px", padding: "10px", fontSize: "18px" }}
                fullWidth
              >
                Sign up Now
              </Button>
            </form>

            <p>
              Don't have an account?{" "}
              <Button color="primary" onClick={() => navigate("/")}>
                Sign in
              </Button>
            </p>
          </Paper>
        </Grid>
      </div>
    </Modal>
  );
}

export default Signup;
