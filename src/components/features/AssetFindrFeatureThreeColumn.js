import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import feature1Image from "../../images/feature5-1.png";
import feature2Image from "../../images/feature5-2.svg";
import feature3Image from "../../images/feature5-3.svg";

export const Container = tw.div`relative bg-[#F1F6FF]`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Heading = tw(SectionHeading)`w-full font-semibold text-[#0C162C]`;
const Plan = styled.div`
  ${tw`max-w-sm lg:mr-8 lg:last:mr-0 text-center px-8 relative pt-2 text-black flex flex-col justify-center items-center`}
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 text-[#0C162C] font-normal`}
  }
`;
const ImageColumn = styled.div`
  ${tw`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 flex-shrink-0 relative mt-8`}
`;


export const DesktopHeaderContainer = styled.div`
  ${tw`hidden w-full lg:flex items-center`}
`;
export const MobileHeaderContainer = styled.div`
  ${tw`lg:hidden flex items-center mx-6`}
  ${Heading} {
    ${tw`text-3xl mb-0 font-semibold`}
  }
`;

export const DesktopPlansContainer = styled.div`
  ${tw`hidden lg:flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`}
`;
export const MobilePlansContainer = styled.div`
  ${tw`lg:hidden flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative mx-6 mt-10 gap-12`}
  ${Plan} {
    ${tw`flex-row items-center gap-16 px-0`}
  }
  ${ImageColumn} {
    ${tw`w-20 m-0`}

    img {
      ${tw`w-20`}
    }
  }
  ${PlanFeatures} {
    ${tw`flex-row p-0`}
    .feature {
      ${tw`text-lg text-left font-normal`}
    }
  }
`;


export default ({
  heading = "",
  plans = null,
  collapseBreakpointClass = "lg"
}) => {

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  return (
    <Container>
      <ContentWithPaddingXl>
        <DesktopHeaderContainer css={collapseBreakpointCss.desktopContainer}>
          <Heading>{heading}</Heading>
        </DesktopHeaderContainer>
        <MobileHeaderContainer css={collapseBreakpointCss.mobileContainer}>
          <Heading>{heading}</Heading>
        </MobileHeaderContainer>

        <DesktopPlansContainer css={collapseBreakpointCss.desktopContainer}>
          {plans.map((plan, index) => (
            <Plan key={index}>
              <ImageColumn>
              {index === 0 && (
                <img src={feature1Image} css={tw`w-[100px]`} alt="Img" />
              )}
              {index === 1 && (
                <img src={feature2Image} alt="Img" />
              )}
              {index === 2 && (
                <img src={feature3Image} alt="Img" />
              )}                            
              </ImageColumn>
              <PlanFeatures>
                <span className="feature">{plan.mainFeature}</span>
              </PlanFeatures>
            </Plan>
          ))}
        </DesktopPlansContainer>
        <MobilePlansContainer css={collapseBreakpointCss.mobileContainer}>
          {plans.map((plan, index) => (
            <Plan key={index}>
              <ImageColumn>
              {index === 0 && (
                <img src={feature1Image} alt="Img" />
              )}
              {index === 1 && (
                <img src={feature2Image} alt="Img" />
              )}
              {index === 2 && (
                <img src={feature3Image} alt="Img" />
              )}                            
              </ImageColumn>
              <PlanFeatures>
                <span className="feature">{plan.mainFeature}</span>
              </PlanFeatures>
            </Plan>
          ))}
        </MobilePlansContainer>
      </ContentWithPaddingXl>
    </Container>
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