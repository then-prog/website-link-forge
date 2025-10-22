import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/DigispectHeader";
import Feature from "components/features/DigispectFeatureWithImage.js";
import Footer from "components/footers/AssetFindrFooter";
import Header from "components/headers/light.js";

import digispectFeature1 from "images/digispect-feature-1.svg"
import digispectFeature2 from "images/digispect-feature-2.svg"
import digispectFeature3 from "images/digispect-feature-3.svg"
import digispectFeature4 from "images/digispect-feature-4.svg"

import { useLocation } from "react-router-dom";
import { NavLinks, NavLink, PrimaryLinkWithATag, LogoLink } from "components/headers/light.js";
import digispectLogo from "images/digispect-logo.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

export const digiscpectLogoLink = (
  <LogoLink to="/digispect#home">
    <img src={digispectLogo} alt="digispect-logo" />
  </LogoLink>
);


export default () => {
  const StyledHeader = styled(Header)`
    ${tw`max-w-none w-full fixed`}
  `;
  const Subheading = tw.span`mx-auto text-sm mb-4 pt-16 flex flex-col items-center uppercase tracking-widest font-bold text-primary-500`;
  const featuresRef = React.useRef(null);
  const homeRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const location = useLocation();

  const defaultLinks =  [
    <NavLinks key={1}>
      <NavLink
        className="nav-link"
     
        to="/digispect#home"
      >
        Home
      </NavLink>
      <NavLink
        className="nav-link"
        to="/digispect#features"
      >
        Features
      </NavLink>
      <NavLink
        className="nav-link"
        to="/digispect#contact-us"
      >
        Contact Us
      </NavLink>

      <PrimaryLinkWithATag
        css={tw`rounded-full bg-[#B9FF01] text-[#1D62FF] hocus:bg-[#B9FF01] hocus:text-[white] font-semibold`}
        href="https://play.google.com/store/apps/details?id=com.assetfindr.app&pcampaignid=web_share"
      >
        Download Now
      </PrimaryLinkWithATag>
    </NavLinks>,
  ];

  React.useEffect(() => {
    if (location.hash === "#contact-us" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (location.hash === "#home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (location.hash === "#features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]); 

  return (
    <AnimationRevealPage>
      <div ref={homeRef}>
        <Hero
          header={
            <StyledHeader 
              roundedHeaderButton={true} 
              links={defaultLinks} 
              digispectLandingPage={digiscpectLogoLink}
              />
          }
        ></Hero>
      </div>

      <div ref={featuresRef}>
        <Subheading>Our Features</Subheading>
        <Feature 
          heading="Connect & Calibrate your DigiTools"
          textOnLeft={false}
          imageSrc={digispectFeature1}
          description="Seamlessly link your DigiTool and calibrate it before every inspection to ensure precise and reliable tyre assessments."
        />
        <Feature 
          heading="Multiple Inspection Options"
          imageSrc={digispectFeature2}
          description="Flexibly inspect standalone tyres or those linked to a vehicle, adapting to your specific workflow needs."
        />
        <Feature 
          heading="Record Tread Depth and Air Pressure readings with Ease"
          textOnLeft={false}
          imageSrc={digispectFeature3}
          description="Effortlessly capture accurate tread depth and air pressure readings using DigiTools and store them directly in the app."
        />
        <Feature 
          heading="Downloadable Inspection Reports"
          imageSrc={digispectFeature4}
          description="Export detailed inspection reports in CSV or PDF format for future reference and in-depth analysis."
        />
      </div>
      
      <div ref={contactRef}>
        <Footer />
      </div>
    </AnimationRevealPage>
  );
};
