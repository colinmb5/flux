import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/Button/Button";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../helpers/responsive";

const TopSectionContainer = styled.div`
  /* min-height: 350px; */
  ${tw`
        w-full
        max-w-screen-2xl 
        flex
        justify-between
        min-h-[350px]
        sm:min-h-[400px]
        mt-10
        sm:mt-24
        pl-3 
        pr-3 
        lg:pl-12 
        lg:pr-12    
    `}
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2 
        flex
        flex-col
    `}
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2 
        flex
        flex-col
        relative
        mt-20 
        
    `}
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl 
        2xl:text-6xl
        xl:text-5xl
        md:text-4xl
        sm:text-3xl 
        lg:font-black
        md:font-extrabold
        text-black
        mb-4 
        sm:leading-snug
        lg:leading-normal
        xl:leading-snug
    `}
`;

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12 
        text-gray-800
        w-11/12
    `}
`;

const BlogContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -7em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: 580px) {
    width: 30em;
    max-height: 10em;
    right: -5em;
    top: -13em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.md}) {
    width: 40em;
    max-height: 10em;
    right: -5em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -2em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: 580px) {
    height: 13.5em;
    right: -6em;
    top: -5rem;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 18em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 23em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-wrap 
    mt-4 
    `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>
          Rent The Best Quality <br /> Car's With Us
        </Slogan>
        <Description>
          Always choose the best car from out local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like.
        </Description>
        <ButtonContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlogContainer>
          <img src={BlobImg} alt="" />
        </BlogContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} alt="" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
