import React from "react";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartCard from "./cartCard";
import { useNavigate } from "react-router-dom";
function Cart() {
  const productState = useSelector((state) => state.variable);
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Container>
          <Paper elevation={2} sx={{ mt: 2, textAlign: "center", p: 4 }}>
            {" "}
            <Typography variant="h4">Order Summary</Typography>
            <Typography variant="body2" mt={2}>
              Total Items: {productState.totalProduct}
            </Typography>
            <Typography variant="h5" mt={2}>
              Total Amount: ${productState.totalAmount}/-
            </Typography>
            {productState.totalAmount !== 0 ? (
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3, padding: "10px 30px", textTransform: "none" }}
                onClick={() => navigate("/checkout")}
              >
                Proced to Checkout
              </Button>
            ) : null}
          </Paper>
          <CartCard />
          {/* {productCard.totalAmount !== 0 ? (
            <CartCard props={productCard} />
          ) : null} */}
        </Container>
      </Box>
    </>
  );
}

export default Cart;
