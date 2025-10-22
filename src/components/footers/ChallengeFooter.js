import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../images/bg-hero.svg";

export const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background: url(${backgroundImage});
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 opacity-75`;
const HeroContainer = tw.div`z-20  mt-8 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const PrimaryAction = styled.div`
  button {
    ${tw`rounded-full cursor-pointer px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-semibold transition duration-300 bg-[#B9FF01] text-[#1D62FF] hocus:bg-[#B9FF01] hocus:text-[white]  border-none`}
  }
`;
const Heading = styled.h1`
  ${tw`text-3xl pt-16 text-center sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export const DesktopContent = styled.div`
  ${tw`hidden lg:flex flex-1 flex-col justify-center items-center `}
`;
export const MobileContent = styled.div`
  ${tw`lg:hidden mx-8 flex flex-1 flex-col justify-center items-center`}
  ${Heading} {
    ${tw.h1`text-2xl font-semibold`}
  }
`;

export default ({ header, collapseBreakpointClass = "lg" }) => {
  const navigate = useNavigate();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];
  const goToDigispect = () => {
    navigate("/digispect#home");
  };
  return (
    <Container id="home">
      <OpacityOverlay />
      <HeroContainer>
        {header}
        <DesktopContent css={collapseBreakpointCss.desktopContet}>
          <Heading>
            Discover how DigiSpect
            <br />
            can transform your fleet’s
            <br />
            tyre inspections and reduce
            <br />
            your overall tyre costs!
          </Heading>

          <PrimaryAction>
            <button onClick={goToDigispect}>Learn More</button>
          </PrimaryAction>
        </DesktopContent>

        <MobileContent css={collapseBreakpointCss.desktopContet}>
          <Heading>
            Discover how DigiSpect
            <br />
            can transform your fleet’s
            <br />
            tyre inspections and reduce
            <br />
            your overall tyre costs!
          </Heading>

          <PrimaryAction>
            <button onClick={goToDigispect}>Learn More</button>
          </PrimaryAction>
        </MobileContent>
      </HeroContainer>
    </Container>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileContent: tw`sm:hidden`,
    desktopContet: tw`sm:flex`,
  },
  md: {
    mobileContent: tw`md:hidden`,
    desktopContet: tw`md:flex`,
  },
  lg: {
    mobileContent: tw`lg:hidden`,
    desktopContet: tw`lg:flex`,
  },
  xl: {
    mobileContent: tw`lg:hidden`,
    desktopContet: tw`lg:flex`,
  },
};
