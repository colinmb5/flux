import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../interfaces/iCar";
import { Car } from "../../components/Car/Car";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../helpers/responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const TopCarsContainer = styled.div`
  user-select: none;
  ${tw`
        max-w-screen-lg
        w-full
        min-h-[600px]
        flex
        flex-col
        items-center
        justify-center
        pr-4 
        pl-4 
        md:pl-0 
        md:pr-0 
        mb-10 
    `}
`;

const Title = styled.h2`
  ${tw`
        text-3xl 
        lg:text-5xl
        text-black
        font-extrabold 
    `}
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7 
        md:mt-10 
        min-h-[500px]
    `}
`;

export function TopCars() {
  const [current, setCurrent] = useState();
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Gas",
  };

  const testCar2: ICar = {
    name: "Honda City 5 Seater",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Gas",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
        </Swiper>
      </CarsContainer>
    </TopCarsContainer>
  );
}
