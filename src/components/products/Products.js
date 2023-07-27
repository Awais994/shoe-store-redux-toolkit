import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductCard from "./productCard";
import { shoe } from "./shoeList";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Products() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const xsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <>
      <Box mt={4} pb={4}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "22px", sm: "26px", md: "30px" },
                fontWeight: "700",
              }}
            >
              {" "}
              Products
            </Typography>
            <Box
              pt={3}
              sx={{
                width: "50px",
                p: 4,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronLeftIcon
                className="swiper-button-prev"
                style={{
                  border: "1px solid #01C5BA",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  color: "#01C5BA",
                  padding: "7px",
                }}
              />
              <ChevronRightIcon
                className="swiper-button-next"
                style={{
                  border: "1px solid #01C5BA",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  color: "#01C5BA",
                  padding: "7px",
                }}
              />
            </Box>
          </Box>
          <Swiper
            slidesPerView={xsScreen ? 2 : smScreen ? 4 : 4}
            spaceBetween={40}
            loop={true}
            navigation={{
              nextEl: `.swiper-button-next`,
              prevEl: `.swiper-button-prev`,
            }}
            modules={[Navigation]}
          >
            {shoe.map((info) => (
              <SwiperSlide key={info.id}>
                <ProductCard props={[info]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </>
  );
}

export default Products;
