import React, { useState } from "react";
import { Button, Grid, TextField, Paper, Modal } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const updateformData = e => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const signIn = () => {
    const { email, password } = formData;

    if (email === "" || email === null) {
      alert("Enter the Valid Email");
    } else if (password === "" || password === null) {
      alert("Enter the Valid Password");
    } else {
      axios
        .post("http://localhost:5000/", formData)
        .then(response => {
          if (response.data.user) {
            navigate("/home");
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
              height: "40vh",
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper elevation={5} style={{ padding: "25px" }}>
              <h1> Sign In</h1>
              <TextField
                label="Email Address"
                margin="normal"
                name="email"
                type="email"
                value={formData.email}
                onChange={updateformData}
                required
                fullWidth
              />
              <TextField
                label="Password"
                margin="normal"
                name="password"
                type="password"
                value={formData.password}
                onChange={updateformData}
                required
                fullWidth
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                onClick={signIn}
                style={{ padding: "10px", fontSize: "18px" }}
              >
                Sign In Now
              </Button>
              <p>
                Don't have an account?{" "}
                <Button color="primary" onClick={() => navigate("/signup")}>
                  Sign Up
                </Button>
              </p>
            </Paper>
          </Grid>
        </div>
      </Modal>
    );
}

export default Signin;
