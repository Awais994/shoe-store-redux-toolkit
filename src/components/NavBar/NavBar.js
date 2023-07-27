import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledBadge } from "../styled/Styled";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.product);
  const filterContent = state.filter((info) => {
    return info.quantity !== 0;
  });

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component={Link}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box component="img" src="logo1.png" sx={{ height: 50 }} />
                <Typography variant="body1" fontSize="16px">
                  {" "}
                  Shoe Store
                </Typography>
                <Box component="img" src="logo.png" sx={{ height: 50 }} />
              </Box>
              <IconButton onClick={() => navigate("cart")}>
                <StyledBadge
                  badgeContent={filterContent.length}
                  color="secondary"
                >
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </StyledBadge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
