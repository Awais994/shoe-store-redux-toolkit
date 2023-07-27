import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CardHeader,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  removeSingleProduct,
  removeQuantity,
  addProduct,
} from "../Store/slices/ProductSlices";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addItems } from "../Store/slices/TotalProduct";

function CartCard() {
  const dispatch = useDispatch();
  const productCard = useSelector((state) => state.product);
  const filterContent = productCard.filter((info) => {
    return info.quantity !== 0;
  });
  dispatch(addItems(filterContent));
  return (
    <>
      {filterContent.length !== 0 ? (
        <Grid container spacing={2} my={4}>
          {filterContent.map(({ img, name, price, id, quantity }) => (
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    border: "1px solid black",
                    borderRadius: "none",
                    // boxShadow: "none",
                  }}
                >
                  <CardHeader
                    title={name}
                    action={
                      <IconButton
                        onClick={() => dispatch(removeSingleProduct(id))}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    }
                  />
                  <CardMedia component="img" image={"/" + img} alt="img" />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2">${price}/-</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          //   width: "100px",
                        }}
                      >
                        <IconButton
                          onClick={() => dispatch(removeQuantity(id))}
                        >
                          <RemoveIcon
                            sx={{ fontSize: "15px", color: "black" }}
                          />
                        </IconButton>
                        <Typography variant="body2" ml={1} mr={1}>
                          {quantity}
                        </Typography>
                        <IconButton onClick={() => dispatch(addProduct(id))}>
                          <AddIcon sx={{ fontSize: "15px", color: "black" }} />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </>
  );
}

export default CartCard;
