import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/ChallengeHeader";
import Header from "components/headers/light.js";
import Footer from "components/footers/ChallengeFooter";
import Leaderboard from "components/features/Leaderboard";
import { useLocation } from "react-router-dom";
import {
  NavLinks,
  NavLink,
  PrimaryLinkWithATag,
  LogoLink,
} from "components/headers/light.js";
import digispectLogo from "images/digispect-logo.svg";
import assetfindrLogo from "images/assetfindr-logo-v2.svg";

import truckIllustration from "images/truck-illustration.png";
import tyreIllustration from "images/tyre-illustration.png";
import manualInspectionIllustration from "images/manual-inspection-illustration.png";
import digispectInspectionIllustration from "images/digispect-inspection-illustration.png";
import { css } from "styled-components/macro"; //eslint-disable-line

const SectionHeading = tw.h2`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12 text-gray-900`;

const WhyTyreSection = tw.div`bg-white py-8 md:py-16 px-4`;
const TyreStatsContainer = tw.div`max-w-6xl mx-auto text-center`;
const BigStat = tw.h2`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4`;

const BenefitsGrid = tw.div`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 items-start lg:items-center`;
const BenefitCard = tw.div`text-center p-4 md:p-6`;
const BenefitTitle = tw.h3`text-xl md:text-2xl font-extrabold text-[#1D62FF] mb-3 md:mb-4`;
const BenefitDescription = tw.p`text-sm md:text-base text-gray-700 leading-relaxed`;

const GuidelinesSection = tw.div`bg-[#1D62FF] py-8 md:py-16 px-4`;
const GuidelinesContainer = tw.div`max-w-6xl mx-auto text-center`;
const GuidelinesTitle = tw.h2`text-2xl sm:text-3xl md:text-4xl font-black text-[#B9FF01] mb-6 md:mb-12`;
const GuidelinesGrid = tw.div`flex flex-wrap justify-center gap-4 md:gap-2 max-w-5xl mx-auto`;
const GuidelineCard = tw.div`text-center p-4 md:p-6 w-full sm:w-80 md:w-72 flex-shrink-0`;
const GuidelineTitle = tw.h3`text-lg md:text-2xl font-extrabold text-white mb-3 md:mb-4 px-2 md:px-4`;
const GuidelineDescription = tw.p`text-sm md:text-base text-blue-100 leading-relaxed px-2 md:px-4`;
const Container = tw.div`bg-[#1D62FF] min-h-screen`;

const ComparisonSection = tw.div`bg-white py-8 md:py-16 px-4`;
const ComparisonContainer = tw.div`max-w-6xl mx-auto`;
const ComparisonTitle = tw.h2`text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-24 text-[#1D62FF]`;
const ComparisonGrid = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`;
const ComparisonColumn = tw.div`text-center`;
const ComparisonImage = tw.img`w-full max-w-sm mx-auto mb-8 rounded-2xl shadow-lg`;

export const digiscpectLogoLink = (
  <LogoLink to="/digispect#home">
    <img src={digispectLogo} alt="digispect-logo" />
  </LogoLink>
);

export const challengeLogoLink = (
  <LogoLink to="/challenge#home">
    <img src={assetfindrLogo} alt="assetfindr-logo" />
    <img src={digispectLogo} alt="digispect-logo" tw="ml-4" />
  </LogoLink>
);

export default () => {
  const StyledHeader = styled(Header)`
    ${tw`max-w-none w-full fixed z-10`}
  `;
  const location = useLocation();
  const contactRef = React.useRef(null);
  const homeRef = React.useRef(null);

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink className="nav-link" to="/#home">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/#features">
        Features
      </NavLink>
      <NavLink className="nav-link" to="/challenge-register#contact-us">
        Contact Us
      </NavLink>

      <PrimaryLinkWithATag
        css={tw`rounded-full bg-[#B9FF01] text-[#1D62FF] hocus:bg-[#B9FF01] hocus:text-[white] font-semibold`}
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=628111245537&text=Hello%2C+I+would+like+to+request+a+demo+of+Assetfindr.+Could+you+please+assist+me%3F+My+details+are+as+follows%3A%0A%0A%E2%80%A2+Name%3A+%0A%0A%E2%80%A2+Email%3A+%0A%0A%E2%80%A2+Company%3A+%0A%0A%E2%80%A2+Role%3A+%0A%0AThank+you&type=phone_number&app_absent=0"
      >
        Get Demo
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
  }, [location]);
  return (
    <AnimationRevealPage>
      <Container>
        <div ref={homeRef}>
          <Hero
            header={
              <StyledHeader
                links={defaultLinks}
                digispectLandingPage={digiscpectLogoLink}
              />
            }
          ></Hero>
        </div>

        <div>
          <Leaderboard />

          <WhyTyreSection>
            <TyreStatsContainer>
              <div tw="mb-8">
                <SectionHeading tw="text-4xl font-black text-gray-900 mb-4">
                  Why Tyre Inspection Matters?
                </SectionHeading>
                <BigStat>
                  Tyres = Up to 30% of Fleet <br />
                  Operating Costs
                </BigStat>
              </div>

              <BenefitsGrid>
                <div tw="lg:order-1">
                  <BenefitCard>
                    <BenefitTitle>Safety</BenefitTitle>
                    <BenefitDescription>
                      Tire inspections help catch problems early to prevent
                      dangerous blowouts and keep drivers safe on the road.
                    </BenefitDescription>
                  </BenefitCard>
                  <BenefitCard>
                    <BenefitTitle>Cost Efficiency</BenefitTitle>
                    <BenefitDescription>
                      Maintaining tires through inspections extends their
                      lifespan, saving money by reducing the need for frequent
                      replacements.
                    </BenefitDescription>
                  </BenefitCard>
                </div>

                <div tw="flex justify-center lg:order-2 my-6 lg:my-0">
                  <img
                    src={tyreIllustration}
                    alt="Tyre"
                    tw="w-full max-w-64 md:max-w-72 lg:max-w-80"
                  />
                </div>

                <div tw="lg:order-3">
                  <BenefitCard>
                    <BenefitTitle>Reduced Downtime</BenefitTitle>
                    <BenefitDescription>
                      Early detection of tire issues lowers the chance of
                      unexpected vehicle breakdowns, keeping operations running
                      smoothly.
                    </BenefitDescription>
                  </BenefitCard>
                  <BenefitCard>
                    <BenefitTitle>Compliance</BenefitTitle>
                    <BenefitDescription>
                      Routine checks ensure tires meet legal safety standards,
                      helping avoid fines and regulatory penalties.
                    </BenefitDescription>
                  </BenefitCard>
                </div>
              </BenefitsGrid>
            </TyreStatsContainer>
          </WhyTyreSection>

          <GuidelinesSection>
            <GuidelinesContainer>
              <GuidelinesTitle>
                Recommended Tyre Inspection Guidelines
              </GuidelinesTitle>
              <GuidelinesGrid>
                <GuidelineCard>
                  <GuidelineTitle>
                    Check tread depth at multiple points:
                  </GuidelineTitle>
                  <GuidelineDescription>
                    Ensure tires have adequate grip and wear evenly by
                    inspecting tread depth in several locations.
                  </GuidelineDescription>
                </GuidelineCard>
                <GuidelineCard>
                  <GuidelineTitle>
                    Verify tyre <br /> pressure:
                  </GuidelineTitle>
                  <GuidelineDescription>
                    Maintain correct pressure to improve safety, fuel
                    efficiency, and tire lifespan.
                  </GuidelineDescription>
                </GuidelineCard>
                <GuidelineCard>
                  <GuidelineTitle>
                    Look for cuts, cracks, bulges, wear condition:
                  </GuidelineTitle>
                  <GuidelineDescription>
                    Spot damage or abnormal wear early to prevent tire failure.
                  </GuidelineDescription>
                </GuidelineCard>
              </GuidelinesGrid>
              <GuidelinesGrid>
                <GuidelineCard>
                  <GuidelineTitle>Inspect valve stems and caps:</GuidelineTitle>
                  <GuidelineDescription>
                    Check these parts for leaks or damage to keep tires inflated
                    properly.
                  </GuidelineDescription>
                </GuidelineCard>
                <GuidelineCard>
                  <GuidelineTitle>
                    Record and track data consistently:
                  </GuidelineTitle>
                  <GuidelineDescription>
                    Log inspection results regularly for better fleet management
                    and timely maintenance.
                  </GuidelineDescription>
                </GuidelineCard>
              </GuidelinesGrid>
            </GuidelinesContainer>
          </GuidelinesSection>
          <div tw="flex justify-center -mt-16 md:-mt-32">
            <img
              src={truckIllustration}
              alt="Truck Fleet"
              tw="max-w-full h-auto mx-auto px-4"
              style={{ maxWidth: "1200px" }}
            />
          </div>
          <ComparisonSection>
            <ComparisonContainer>
              <ComparisonTitle>Why DigiSpect?</ComparisonTitle>
              <ComparisonGrid>
                <ComparisonColumn>
                  <ComparisonImage
                    src={manualInspectionIllustration}
                    alt="Manual Inspection"
                  />
                </ComparisonColumn>

                <ComparisonColumn>
                  <ComparisonImage
                    src={digispectInspectionIllustration}
                    alt="With DigiSpect"
                  />
                </ComparisonColumn>
              </ComparisonGrid>
            </ComparisonContainer>
          </ComparisonSection>

          <div ref={contactRef}>
            <Footer />
          </div>

          <div tw="bg-white py-4 mx-auto">
            <div tw="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
              <div tw="flex items-center">
                <img
                  src={assetfindrLogo}
                  alt="AssetFindr"
                  tw="h-16 md:h-20 mr-4"
                />
              </div>
              <div tw="text-sm md:text-lg font-medium text-center md:text-right">
                From Tyre Inspections to Total Asset Monitoring & Maintenance
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimationRevealPage>
  );
};
