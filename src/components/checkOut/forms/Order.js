import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { StyledBox } from "../../styled/Styled";
import { removeInfo } from "../../Store/slices/CartSlice";
import { removeAllProduct } from "../../Store/slices/ProductSlices";
function Order({ props }) {
  const state = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(removeInfo());
    dispatch(removeAllProduct());
    props.handleReset();
  };
  const totalAmountStatus = useSelector((state) => state.variable.totalAmount);
  return (
    <>
      <Box>
        <Container>
          <Paper elevation={2} sx={{ mt: 2, textAlign: "center", p: 4 }}>
            <Typography variant="h4">Order Summary</Typography>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
              <Typography variant="body1">Delivery</Typography>
              <Typography variant="body1">Free</Typography>
            </StyledBox>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
              <Typography variant="body1">Total</Typography>
              <Typography variant="body1">${totalAmountStatus}/-</Typography>
            </StyledBox>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
              <Typography variant="body1">Name</Typography>
              <Typography variant="body1">
                {state.personalInfo.firstName} {state.personalInfo.lastName}
              </Typography>
            </StyledBox>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
              <Typography variant="body1">City</Typography>
              <Typography variant="body1">{state.addressInfo.city}</Typography>
            </StyledBox>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
              <Typography variant="body1">Country</Typography>
              <Typography variant="body1">
                {state.addressInfo.country}
              </Typography>
            </StyledBox>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
              <Typography variant="body1">Address</Typography>
              <Typography variant="body1">
                {state.addressInfo.address}
              </Typography>
            </StyledBox>
            <Divider sx={{ marginTop: "10px" }} />
            <StyledBox mt={2} p={2}>
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
                onClick={handleClickOpen}
                disableElevation
                sx={{ marginLeft: "20px" }}
              >
                finish
              </Button>
            </StyledBox>
          </Paper>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your order number is <strong>#2001539</strong>. We have emailed
                your order confirmation, and will send you an update when your
                order has shipped.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                autoFocus
                sx={{ textTransform: "none" }}
              >
                Continue Shopping
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </>
  );
}

export default Order;
