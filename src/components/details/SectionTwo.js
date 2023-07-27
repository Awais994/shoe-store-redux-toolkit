import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// import { StyledTypographyDetail } from "../Styled/Styled";
const cardData = [
  {
    img: "vector1.png",
    heading: "Shipping price: $20",
    para: "Your orders are shipped seamlessly between countries",
  },
  {
    img: "vector2.png",
    heading: "Extended 45 day returns",
    para: "You have the right to return your orders within 45 days.",
  },
  {
    img: "vector3.png",
    heading: " Secure Payment",
    para: "Your payments are secure with our private security network.",
  },
];
function SectionTwo() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        my={4}
        sx={{ textAlign: { xs: "center", sm: "left", md: "left" } }}
      >
        {cardData.map((info) => (
          <>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              sx={{
                textAlign: { xs: "center", sm: "right", md: "right" },
              }}
            >
              <Box pt={1} pr={{ xs: 0, sm: 4, md: 4 }}>
                <Box component="img" src={`${"/" + info.img}`} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Box>
                <Typography variant="body2">{info.heading}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "12px" },
                  }}
                >
                  {info.para}
                </Typography>
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}

export default SectionTwo;
