import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { TextHeading4, TextCaptionLReg } from "components/misc/Typography";
import { useSearchParams } from "react-router-dom";

import { css } from "styled-components/macro"; //eslint-disable-line

export const DesktopContainer = styled.div`
  ${tw`hidden lg:flex flex flex-col items-center text-center py-16 px-80`}
`;
export const MobileContainer = styled.div`
  ${tw`lg:hidden flex flex-col items-center text-center py-16 px-16`}
`;

export const UpgradeButton = styled.button`
  ${tw`px-4 py-[12px] cursor-pointer rounded-lg bg-[#185FFF] text-white border-transparent text-sm`}
`

export default ({  collapseBreakpointClass = "lg"}) => {
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("user");
  const companyName = searchParams.get("companyName");

  const whatsappHotline = () => {
    window.open(`https://api.whatsapp.com/send/?phone=628111245537&text=Halo%2C+Saya+${userName}+dari+${companyName}%2C+saya+ada+masalah%2Fpertanyaan%3A&type=phone_number&app_absent=0`, '_blank')
  };
  return (
    <div>
      <DesktopContainer css={collapseBreakpointCss.desktopContent}>
        <TextHeading4>Upgrade Your Plan & Gain Wider Data Access!</TextHeading4>
        <TextCaptionLReg tw="my-4">
          Manage and monitor your inspection data more flexibly and comprehensively. By upgrading to DigiSpect Lite, PRO, or PRO+, you can access more inspection history and download data for up to the past 31 days!
        </TextCaptionLReg>
        <UpgradeButton tw="mt-2" onClick={whatsappHotline}>Upgrade Plan Now</UpgradeButton>
      </DesktopContainer>
      <MobileContainer css={collapseBreakpointCss.mobileContent}>
        <TextHeading4>Upgrade Your Plan & Gain Wider Data Access!</TextHeading4>
        <TextCaptionLReg tw="my-4">
          Manage and monitor your inspection data more flexibly and comprehensively. By upgrading to DigiSpect Lite, PRO, or PRO+, you can access more inspection history and download data for up to the past 31 days!
        </TextCaptionLReg>
        <UpgradeButton tw="mt-2" onClick={whatsappHotline}>Upgrade Plan Now</UpgradeButton>
      </MobileContainer>
    </div>

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
