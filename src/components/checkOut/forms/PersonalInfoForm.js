import React from "react";
import { Grid, Button, TextField, FormLabel, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInfo } from "../../Store/slices/CartSlice";
function PersonalInfoForm({ props }) {
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addInfo(formData));
    props.handleNext();
  };

  return (
    <>
      <Grid
        container
        my={4}
        component="form"
        onSubmit={submitForm}
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={10} sm={10} md={10} sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Personal Information
          </Typography>
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          {" "}
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <TextField
            id="firstName"
            fullWidth
            required
            variant="outlined"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <TextField
            id="lastName"
            fullWidth
            required
            variant="outlined"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            required
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <Button
            color="primary"
            variant="contained"
            disabled={props.step === 0}
            disableElevation
            onClick={() => props.handleBack()}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disableElevation
            sx={{ marginLeft: "20px" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PersonalInfoForm;
