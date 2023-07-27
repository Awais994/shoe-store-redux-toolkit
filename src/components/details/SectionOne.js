import React from "react";

import {
  Box,
  Grid,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { detailAddProduct } from "../Store/slices/ProductSlices";

function SectionOne({ props }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState("");
  const [num, setNum] = useState(1);
  const addCart = (id) => {
    dispatch(detailAddProduct({ quantity: num, id: id }));
    setNum(1);
  };
  const slct = () => {
    return (
      <Select
        id="rating"
        fullWidth
        displayEmpty
        required
        value={rating}
        sx={{
          width: "90px",
          border: "1px solid #01C5BA",
          height: "30px",
        }}
        disabled
      >
        {" "}
        <MenuItem value="" disabled sx={{ display: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon sx={{ color: "#FF7A00" }} />
            <Typography variant="body1" ml={1} fontSize="14px">
              5
            </Typography>
          </Box>
        </MenuItem>
      </Select>
    );
  };
  return (
    <>
      <Grid container spacing={2} my={2} justifyContent="center" p={1}>
        <Grid item xs={6} sm={6} md={6}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "26px", md: "36px" },
              fontWeight: "700",
              color: "#E91E63",
            }}
          >
            ${props.price}/-
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ textAlign: "right" }}>
          <Box sx={{ paddingTop: "5px" }}>{slct()}</Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4} mt={2}>
          {" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #01C5BA",
                width: { xs: "100%", md: "80%" },
              }}
            >
              <IconButton onClick={() => setNum(num - 1)}>
                <RemoveIcon sx={{ fontSize: "15px" }} />
              </IconButton>
              <Typography variant="body2" ml={1} mr={1}>
                {num}
              </Typography>
              <IconButton onClick={() => setNum(num + 1)}>
                <AddIcon sx={{ fontSize: "15px" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sm={8} md={8} mt={2} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => addCart(props.id)}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SectionOne;
