import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../../helpers/marginers";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { SCREENS } from "../../helpers/responsive";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    flex-col
    items-center
    rounded-md
    bg-white
    pt-7 
    pb-7 
    pr-4 
    pl-4 
    sm:pt-2 
    sm:pb-2 
    sm:pl-9 
    sm:pr-9
    sm:flex-row
    `}
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    relative
    `}
`;

const Icon = styled.div`
  ${tw`
    text-red-500 
    fill-current
    text-xs
    md:text-base
    mr-1 
    md:mr-3 
    `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500 
    fill-current
    text-xs
    md:text-base
    ml-1
    `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600 
    text-xs
    pb-4
    sm:pb-0
    md:text-sm
    cursor-pointer
    pt-0.5
    select-none
    `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300 
    mr-2 
    ml-2 
    md:mr-5 
    md:ml-5
    `}
`;

const Button = styled.button`
  ${tw`
    pl-5 
    pr-5 
    pt-3 
    pb-3 
    outline-none
    rounded-md 
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1 
    bg-red-500
    hover:border-red-500 
    hover:text-red-500
    hover:bg-transparent
  `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };
  const toggleReturnCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button>Book Your Ride</Button>
    </CardContainer>
  );
}
