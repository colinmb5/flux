import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../helpers/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4 
        pb-4 
        pr-7 
        pl-7 
        md:pl-0
        md:pr-0 
        bg-white
    `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 20em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 25em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
        items-center
        md:ml-6 
        2xl:ml-16
    `}
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl 
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.p`
  text-align: center;
  ${tw`
        flex
        md:max-w-2xl 
        text-sm
        md:text-base
        mt-4
        font-normal
        text-gray-500 
        justify-center
        items-center

    `}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>
          Get The Best Experience <br /> With Our Rental Deals
        </Title>
        <InfoText>
          Shift up a gear and make a trip extra special by renting an exotic car
          from Flux rentals. Choose from an exciting selection of luxury rentals
          ranging from European to American classic convertibles, SUVs, sports
          cars and much more. With Flux, you’ll get the latest exotic models
          from top manufacturers such as the Mercedes-Benz S Class, BMW 6
          Series, and Jaguar F-Type, just to name a few. Choose a
          high-performance luxury car to make the journey as enjoyable as the
          destination.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
