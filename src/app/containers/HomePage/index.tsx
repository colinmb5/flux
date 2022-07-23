import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/NavBar/NavBar";
import { TopSection } from "./topSection";
import { BookCard } from "../../components/BookCard/BookCard";
import { BookingSteps } from "./bookingSteps";
import { Marginer } from "../../helpers/marginers";

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="2em" />
      <BookCard />
      <Marginer direction="vertical" margin="6em" />
      <BookingSteps />
    </PageContainer>
  );
}
