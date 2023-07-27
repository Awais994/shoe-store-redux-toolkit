import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Store/slices/ProductSlices";
import { addItems } from "../Store/slices/TotalProduct";
import { Link } from "react-router-dom";
function ProductCard({ props }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);

  const filterContent = state.filter((info) => {
    return info.quantity !== 0;
  });

  dispatch(addItems(filterContent));
  return (
    <>
      {props.map(({ img, name, price, id }) => (
        <Box key={name}>
          <Card
            sx={{
              border: "1px solid #fff",
              borderRadius: "none",
              boxShadow: "none",
            }}
          >
            <Box
              component={Link}
              to={`/Products/${id}`}
              sx={{ textDecoration: "none" }}
            >
              <CardMedia component="img" image={"/" + img} alt="img" />
            </Box>

            <CardContent>
              <Typography
                variant="body2"
                sx={{ fontSize: "15px", fontWeight: "700" }}
              >
                {name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">${price}/-</Typography>
                <IconButton onClick={() => dispatch(addProduct(id))}>
                  <ShoppingCartIcon fontSize="small" color="primary" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ProductCard;
