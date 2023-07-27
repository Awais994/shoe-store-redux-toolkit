import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { shoe } from "../products/shoeList";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
function Details() {
  const { id } = useParams();
  const data = shoe.filter((info) => {
    return info.id === id;
  });

  return (
    <>
      <Box
        sx={{
          //   width: {
          //     md: `calc(100% - ${drawerWidth}px)`,
          //     sm: "100%",
          //   },
          //   ml: { md: `${drawerWidth}px` },
          mt: 3,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} my={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={6}>
              <Box>
                <Box sx={{ margin: { xs: "auto", md: "20px 0 0 10px" } }}>
                  <Box
                    mt={2}
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <Box
                      component="img"
                      src={"/" + data[0].img}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </Box>{" "}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box mt={3}>
                <Typography sx={{ fontSize: "30px", lineHeight: "35px" }}>
                  {data[0].name}
                </Typography>
                <SectionOne props={{ price: data[0].price, id: data[0].id }} />
                <SectionTwo />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Details;
