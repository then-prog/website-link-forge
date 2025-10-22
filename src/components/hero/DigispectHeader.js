import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { TwoColumnDesktop, TwoColumnMobile } from "components/features/DigispectFeatureWithImage"

import backgroundImage from "images/bg-hero.svg";
import digispectHero from "images/digispect-hero.svg"
import digispectIcon from "images/digispect-icon.svg"
import googlePlayIcon from "images/get-on-google-play-icon.svg"

import { css } from "styled-components/macro"; //eslint-disable-line

export const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background: url(${backgroundImage});
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 opacity-75`;
const HeroContainer = tw.div`z-20 mt-8 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const PrimaryAction = styled.div`
  img {
    ${tw`cursor-pointer py-2 mt-8 sm:py-4 border-none`}
  }`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first md:pl-4` : tw`md:ml-12 lg:ml-10 md:order-last md:pr-4`
]);
const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,

]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Heading = styled.h1`
  ${tw`flex text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-100 leading-snug -mt-24 sm:mt-0`}
  img {
    ${tw`ml-6`}
  }
`;
const Description = tw.p`mb-5 lg:my-8 text-base xl:text-3xl sm:text-sm text-white font-normal`;

const DesktopContainer = tw(TwoColumnDesktop)`px-0 mx-40 gap-0 my-auto self-center justify-self-center justify-items-center items-center`
const MobileContainer = styled(TwoColumnMobile)`
    ${tw`gap-10 items-center mb-0 pt-32 pb-48`}
    ${ImageColumn} {
      ${tw`flex justify-center`}
    }
    ${Image} {
      ${tw`w-[50%]`}
    }
    ${Heading} {
      ${tw`mt-0 flex items-center justify-center mb-12`}
      img {
        ${tw`text-sm h-[5vh]`}
      }
    }
    ${TextContent} {
      ${tw`mx-4`}
    }
`;

export default ({ 
  header, 
  collapseBreakpointClass = "lg", 
  textOnLeft = true,
}) => {

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const downloadPackage = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.assetfindr.app&pcampaignid=web_share';
  };
  return (
    <Container id="home">
      <OpacityOverlay />
      <HeroContainer>
        {header}
        <DesktopContainer css={collapseBreakpointCss.desktopContent}>
          <ImageColumn>
            <Image src={digispectHero} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Heading>DigiSpect <img src={digispectIcon} alt="icon-digispect"></img></Heading>
              <Description>Revolutionizing Tyre Inspections with Speed & Precision</Description>
              <PrimaryAction onClick={downloadPackage}>
                <img src={googlePlayIcon} alt="gogle-play-shortcut"/>
              </PrimaryAction>
            </TextContent>
          </TextColumn>
      
        </DesktopContainer>

        <MobileContainer css={collapseBreakpointCss.mobileContent}>
          <ImageColumn>
            <Image src={digispectHero} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Heading>DigiSpect <img src={digispectIcon} alt="icon-digispect"></img></Heading>
              <Description>Revolutionizing Tyre Inspections with Speed & Precision</Description>
              <PrimaryAction onClick={downloadPackage}>
                <img src={googlePlayIcon} alt="gogle-play-shortcut"/>
              </PrimaryAction>
            </TextContent>
          </TextColumn>
        </MobileContainer>
      </HeroContainer>
    </Container>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileContent: tw`sm:hidden`,
    desktopContent: tw`sm:flex`,
  },
  md: {
    mobileContent: tw`md:hidden`,
    desktopContent: tw`md:flex`,
  },
  lg: {
    mobileContent: tw`lg:hidden`,
    desktopContent: tw`lg:flex`,
  },
  xl: {
    mobileContent: tw`lg:hidden`,
    desktopContent: tw`lg:flex`,
  }
};