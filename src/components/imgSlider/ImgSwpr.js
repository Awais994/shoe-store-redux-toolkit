import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const banerArry = ["ban1.png", "ban2.png", "ban3.png", "ban4.png"];
function ImgSwpr() {
  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        slidesPerView={xsScreen ? 1 : 2}
        autoplay={true}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {banerArry.map((info) => (
          <SwiperSlide key={info}>
            <Box component="img" src={info} width="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImgSwpr;
