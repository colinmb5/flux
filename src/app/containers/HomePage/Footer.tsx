import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../../components/Logo/Logo";

const FooterContainer = styled.div`
  /* min-height: 24em; */
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        pt-4
        md:pt-12
        pb-1
    `};
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        w-full
        h-full
        pr-12
        pl-12
        max-w-screen-2xl
        justify-center
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        md:w-auto
        mr-2
        md:mr-12
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `}
  & > a {
    ${tw`
            text-sm
            text-white
            transition-all
            hover:text-red-500
        `}
  }
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-12
        mt-6 
        md:mt-0
    `}
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-lg
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const RedIcon = styled.span`
  ${tw`
        w-7
        h-7 
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        text-white
    `}
`;

const BottomContainer = styled.div`
  ${tw`
        min-w-full
        mt-6
        md:mt-16
        flex
        justify-center
    `}
`;

const CopyrightText = styled.small`
  font-size: 11px;
  ${tw`
        text-gray-400
    `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Flux is a car rental company located across the US with high quality
            cars and top rated service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms & Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>1-888-264-7643</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@flux.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Flux. All Rights Reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
