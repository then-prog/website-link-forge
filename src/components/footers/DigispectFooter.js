import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import desktopBackgroundImage from "images/digispect-bg-web.svg";
import mobBackgroundImage from "images/digispect-bg-mob.svg";
import { TextHeading2, TextBodyLReg } from "components/misc/Typography";
import digispectIcon from "images/digispect-icon-blue.svg";
import googlePlayIcon from "images/get-on-google-play-icon.svg";
import digispectMockup from "images/digispect-mockup.svg";

import { css } from "styled-components/macro"; //eslint-disable-line

export const LeftSection = styled.div`w-1/2`;
export const RightSection = styled.div`w-1/2`;

const PrimaryAction = styled.div`
  img {
    ${tw`cursor-pointer py-2 sm:py-4 border-none`}
  }
`;

export const DesktopContainer = styled.div`
  ${tw`hidden lg:flex bg-cover bg-center bg-[#FFFFFF] w-full h-[380px] flex items-center justify-evenly`}
  background: url(${desktopBackgroundImage});
`;

export const MobileContainer = styled.div`
  ${tw`lg:hidden flex flex-col bg-cover bg-center bg-[#FFFFFF] h-full flex py-12`}
  background: url(${mobBackgroundImage});
`;

export default ({ collapseBreakpointClass = "lg" }) => {
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];
  const downloadPackage = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.assetfindr.app&pcampaignid=web_share";
  };

  return (
    <div>
      <DesktopContainer css={collapseBreakpointCss.desktopContainer}>
        <LeftSection>
          <div tw="flex items-center">
            <TextHeading2> DigiSpect </TextHeading2>
            <img tw="ml-4" src={digispectIcon} alt="icon-digispect"></img>
          </div>
          <div tw="py-4">
            <TextBodyLReg>
              Revolutionizing Tyre Inspections with Speed & Precision
            </TextBodyLReg>
          </div>
          <PrimaryAction onClick={downloadPackage}>
            <img src={googlePlayIcon} alt="gogle-play-shortcut" />
          </PrimaryAction>
        </LeftSection>
        <RightSection>
          <img src={digispectMockup} alt="digispect-mockup" />
        </RightSection>
      </DesktopContainer>

      <MobileContainer css={collapseBreakpointCss.mobileContainer}>
        <LeftSection tw="text-center px-24">
          <div>
            <img tw="ml-4" src={digispectIcon} alt="icon-digispect"></img>
          </div>
          <TextHeading2>DigiSpect</TextHeading2>
          <div tw="py-4">
            <TextBodyLReg>
              Revolutionizing Tyre Inspections with Speed & Precision
            </TextBodyLReg>
          </div>
          <PrimaryAction onClick={downloadPackage}>
            <img src={googlePlayIcon} alt="gogle-play-shortcut" />
          </PrimaryAction>
        </LeftSection>
        <RightSection tw="text-center py-8">
          <img src={digispectMockup} alt="digispect-mockup" />
        </RightSection>
      </MobileContainer>
    </div>
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
  },
};
