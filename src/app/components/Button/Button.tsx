import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
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
  `}
`;

const OutlinedButton = styled(BaseButton)`
  &:hover {
    box-shadow: 2px 5px 5px #cea0a0;
  }
  ${tw`
    bg-red-500
 `}
`;

const FilledButton = styled(BaseButton)`
  &:hover {
    box-shadow: 2px 5px 5px #cea0a0;
  }
  ${tw`
    border-red-500 
    text-red-500
    bg-transparent
 `}
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
}
