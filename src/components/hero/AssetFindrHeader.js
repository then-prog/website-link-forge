import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import backgroundImage from "../../images/bg-hero.svg";

export const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background: url(${backgroundImage});
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 opacity-75`;
const HeroContainer = tw.div`z-20  mt-8 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-3xl sm:text-sm text-center text-white font-normal`;
const PrimaryAction = styled.div`
  button {
    ${tw`rounded-full cursor-pointer px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-semibold transition duration-300 bg-[#B9FF01] text-[#1D62FF] hocus:bg-[#B9FF01] hocus:text-[white]  border-none`}
  }
`;
const Heading = styled.h1`
  ${tw`text-3xl pt-32 text-center sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export const DesktopContent = styled.div`
  ${tw`hidden px-4 lg:flex flex-1 flex-col justify-center items-center`}
`;
export const MobileContent = styled.div`
  ${tw`lg:hidden mx-8 flex flex-1 flex-col justify-center items-center`}
  ${Heading} {
    ${tw.h1`text-2xl font-semibold`}
  }
  ${Paragraph} {
    ${tw.p`text-sm tracking-tight font-normal`}
  }
`;

export default ({ header, collapseBreakpointClass = "lg" }) => {
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];
  const goToSignup = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=628111245537&text=Hello%2C+I+would+like+to+request+a+demo+of+Assetfindr.+Could+you+please+assist+me%3F+My+details+are+as+follows%3A%0A%0A%E2%80%A2+Name%3A+%0A%0A%E2%80%A2+Email%3A+%0A%0A%E2%80%A2+Company%3A+%0A%0A%E2%80%A2+Role%3A+%0A%0AThank+you&type=phone_number&app_absent=0",
      "_blank"
    );
  };
  return (
    <Container id="home">
      <OpacityOverlay />
      <HeroContainer>
        {header}
        <DesktopContent css={collapseBreakpointCss.desktopContet}>
          <Heading>
            Optimize Asset Performance,
            <br />
            Minimize Loss and Downtime
          </Heading>
          <Paragraph>
            Drive operational success through an End-to-End Asset
            <br />
            Maintenance Management Ecosystem.
          </Paragraph>
          <PrimaryAction>
            <button onClick={goToSignup}>Get a Free Demo</button>
          </PrimaryAction>
        </DesktopContent>

        <MobileContent css={collapseBreakpointCss.desktopContet}>
          <Heading>
            Optimize Asset Performance,
            <br />
            Minimize Loss and Downtime
          </Heading>
          <Paragraph>
            Drive operational success through an End-to-End Asset Maintenance
            Management Ecosystem.
          </Paragraph>
          <PrimaryAction>
            <button onClick={goToSignup}>Get a Free Demo</button>
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
