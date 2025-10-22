import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import checklist from "images/checklist.svg";

const Container = tw.div`relative`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-10 md:order-last`
]);
const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-semibold text-[#0C162C] text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Steps = tw.ul`mt-12 p-0`;
const Step = tw.li`mt-10 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.img`w-6`;
const StepText = tw.div`md:mt-1 md:ml-4`;
const StepHeading = tw.span`leading-none text-xl text-[#0C162C] font-normal`;

export const TwoColumnDesktop = styled.div`
  ${tw`hidden lg:flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`}
`;
export const TwoColumnMobile = styled.div`
  ${tw`lg:hidden flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`}
  ${ImageColumn} {
    ${tw`flex justify-center`}
  }
  ${Image} {
    ${tw`w-[90%]`}
  }
  ${TextContent} {
    ${tw`flex flex-col justify-center mx-6`}
  }
  ${Heading} {
    ${tw`text-xl mb-0 font-semibold`}
  }
  ${Steps} {
    ${tw`my-0`}
  }
  ${Step} {
    ${tw`flex-row items-start gap-2`}
  }
  ${StepNumber} {
    ${tw`mt-[2px] w-5`}
  }
  ${StepText} {
    ${tw`text-left`}
  }
  ${StepHeading} {
    ${tw`text-sm text-left`}
  }
`;


export default ({
  heading = "",
  imageSrc,
  textOnLeft = true,
  steps = null,
  collapseBreakpointClass = "lg"
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  return (
    <Container>
      <TwoColumnDesktop css={collapseBreakpointCss.desktopContainer}>
        <ImageColumn>
          <Image src={imageSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber src={checklist}></StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumnDesktop>

      <TwoColumnMobile css={collapseBreakpointCss.desktopContainer}>
        <ImageColumn>
          <Image src={imageSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber src={checklist}></StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumnMobile>
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