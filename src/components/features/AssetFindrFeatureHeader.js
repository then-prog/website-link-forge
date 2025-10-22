import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SectionSubheading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";


const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto pt-16 md:pt-16`}
`;
const Subheading = tw(SectionSubheading)`mb-4 text-[#185FFF] font-semibold`;
const Heading = tw(SectionHeading)`w-full text-[#0C162C]`;
const Description = tw(SectionDescription)`w-full text-center text-[#0C162C]`;

export const DesktopContainer = styled.div`
  ${tw`hidden lg:flex`}
`;
export const MobileContainer = styled.div`
  ${tw`lg:hidden flex justify-center mx-6`}
`;

export default ({ 
  heading = "", 
  subheading = "", 
  description = "Equip your team with tools and information for efficient and effective operations, accessible anytime, anywhere.",
  collapseBreakpointClass = "lg"
 }) => {

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  return (
    <>
      <DesktopContainer css={collapseBreakpointCss.desktopContainer}>
        <ThreeColumnContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </ThreeColumnContainer>
      </DesktopContainer>

      <MobileContainer css={collapseBreakpointCss.mobileContainer}>
        <ThreeColumnContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </ThreeColumnContainer>
      </MobileContainer>
    </>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileContainer: tw`sm:hidden`,
    desktopContainer: tw`sm:flex`,
  },
  md: {
    mobileContainer: tw`md:hidden`,
    desktopContainer: tw`md:flex`,
  },
  lg: {
    mobileContainer: tw`lg:hidden`,
    desktopContainer: tw`lg:flex`,
  },
  xl: {
    mobileContainer: tw`lg:hidden`,
    desktopContainer: tw`lg:flex`,
  }
};