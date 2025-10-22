import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/AssetFindrHeader.js";
import Features from "components/features/AssetFindrFeatureHeader.js";
import MainFeature from "components/features/AssetFindrFeatureWithRightImage.js";
import MainFeature2 from "components/features/AssetFindrFeatureWithLeftImage.js";
import MainFeature3 from "components/features/AssetFindrFeatureWithRightImage.js";
import MainFeature4 from "components/features/AssetFindrFeatureWithLeftImage.js";
import MainFeature5 from "components/features/AssetFindrFeatureThreeColumn.js";
import Footer from "components/footers/AssetFindrFooter";
import Header from "components/headers/light.js";

import feature1Image from "images/feature1.svg";
import feature2Image from "images/feature2.svg";
import feature3Image from "images/feature3.svg";
import feature4Image from "images/feature4.svg";
import feature5Image1 from "images/feature5-1.png";
import feature5Image2 from "images/feature5-2.svg";
import feature5Image3 from "images/feature5-3.svg";
import { useLocation } from "react-router-dom";
import { digiscpectLogoLink } from "./DigiSpectLandingPage";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const StyledHeader = styled(Header)`
    ${tw`max-w-none w-full fixed`}
  `;
  const featuresRef = React.useRef(null);
  const homeRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const location = useLocation();


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
              digispectLandingPage={digiscpectLogoLink}
            />
          }
        ></Hero>
      </div>

      <div ref={featuresRef}>
        <Features
          subheading={<Subheading>Our Features</Subheading>}
          heading="Effortlessly Manage Asset Maintenance"
        />
        <MainFeature
          heading="Centralized Information Hub for Assets, Maintenance, Monitoring & Reporting"
          imageSrc={feature1Image}
          steps={[
            { heading: "Real-time insights for streamlined planning." },
            {
              heading:
                "Enhanced risk management, turning challenges into opportunities.",
            },
            {
              heading:
                "Informed decision-making for asset maintenance and management.",
            },
          ]}
        />
        <MainFeature2
          heading="Detailed Information & Analytics"
          textOnLeft={false}
          imageSrc={feature2Image}
          steps={[
            { heading: "Attach rich media and documentation to each asset." },
            {
              heading:
                "Comprehensive list of historical and upcoming activities for each asset.",
            },
            {
              heading: "Customizable parameters for advanced asset analytics.",
            },
          ]}
        />
        <MainFeature3
          heading="Connected CMMS"
          imageSrc={feature3Image}
          steps={[
            { heading: "Collaborative Work Order Management." },
            { heading: "Instant updates accessible from any device." },
            { heading: "Searchable maintenance log and audit trail." },
          ]}
        />
        <MainFeature4
          heading="Multi-Industry & Multi-Location"
          textOnLeft={false}
          imageSrc={feature4Image}
          steps={[
            { heading: "Industry-specific analytics dashboard." },
            { heading: "Customizable workflow interface." },
            {
              heading:
                "Efficient organization of users, assets, inventory, and tasks by location.",
            },
          ]}
        />
        <MainFeature5
          heading="Integration with Existing Systems & IOT"
          plans={[
            {
              imageSrc: { feature5Image1 },
              mainFeature:
                "Seamlessly integrate with accounting, HR, or other third-party systems.",
            },
            {
              imageSrc: { feature5Image2 },
              mainFeature: "Import and export files across applications.",
            },
            {
              imageSrc: { feature5Image3 },
              mainFeature:
                "Real-time monitoring through IoT device connectivity.",
            },
          ]}
        />
      </div>
      
      <div ref={contactRef}>
        <Footer />
      </div>
    </AnimationRevealPage>
  );
};
