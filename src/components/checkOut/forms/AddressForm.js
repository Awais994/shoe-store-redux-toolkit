import React from "react";
import {
  Grid,
  Button,
  TextField,
  FormLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInfo } from "../../Store/slices/CartSlice";

function AddressForm({ props }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    state: "",
    address: "",
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
            Address Information
          </Typography>
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          {" "}
          <FormLabel htmlFor="country">Country</FormLabel>
          <TextField
            id="country"
            fullWidth
            required
            variant="outlined"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <FormLabel htmlFor="city">City</FormLabel>
          <TextField
            id="city"
            fullWidth
            required
            variant="outlined"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <FormLabel htmlFor="state">State</FormLabel>
          <TextField
            id="state"
            required
            // type="email"
            fullWidth
            variant="outlined"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            sx={{
              mt: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <FormLabel htmlFor="address">Address</FormLabel>
          <TextField
            id="address"
            // type="email"
            multiline
            required
            rows={6}
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
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

export default AddressForm;
