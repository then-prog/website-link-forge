import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../images/bg-hero.svg";
import challengeLogoWhite from "images/challenge-logo-white.png";
import miningIndonesia2025Logo from "images/mining-indonesia-2025-logo.png";
import { css } from "styled-components/macro"; //eslint-disable-line

export const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
  background: url(${backgroundImage});
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 opacity-75`;
const HeroContainer = tw.div`z-20  mt-8 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const PrimaryAction = styled.div`
  button {
    ${tw`rounded-full cursor-pointer px-8 py-4 
      text-lg font-bold 
      transition duration-300 bg-[#B9FF01] text-black hover:bg-[#9DE000] 
      border-none shadow-lg`}
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
const Heading = styled.h1`
  ${tw`text-3xl pt-32 pb-4 text-center sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const ColumnContainer = tw.div`flex flex-row items-start justify-between w-full max-w-4xl mx-auto`;
const Column = tw.div`flex flex-col items-center`;
const LeftColumn = tw(Column)`w-1/2`;
const RightColumn = tw(Column)`w-1/2`;

const ChallengeText = tw.div`text-center text-white text-lg leading-relaxed mb-6`;
const BoothLocText = tw.div`text-center text-white text-2xl leading-relaxed mb-6 font-bold`;

export const DesktopContent = styled.div`
  ${tw`hidden lg:flex flex-1 flex-col justify-center items-center px-8`}
`;
export const MobileContent = styled.div`
  ${tw`lg:hidden mx-8 flex flex-1 flex-col justify-center items-center`}
  ${Heading} {
    ${tw`mt-4`}
    ${tw.h1`text-2xl font-semibold`}
  }
  ${ColumnContainer} {
    ${tw`flex flex-col gap-4 mt-8`}
  }
  ${LeftColumn} {
    ${tw`w-full flex justify-center`}
  }
  ${RightColumn} {
    ${tw`w-full flex justify-center mt-4`}
  }
  ${BoothLocText} {
    ${tw`text-xl mb-0`}
  }
`;
export default ({ header, collapseBreakpointClass = "lg" }) => {
  const navigate = useNavigate();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];
  const goToRegister = () => {
    navigate("/challenge-register");
  };
  return (
    <Container id="home">
      <OpacityOverlay />
      <HeroContainer>
        {header}
        <DesktopContent css={collapseBreakpointCss.desktopContent}>
          <Heading>
            Join the AssetFindr
            <br />
            DigiSpect Inspection Challenge
          </Heading>
          <ColumnContainer>
            <LeftColumn>
              <img
                src={challengeLogoWhite}
                alt="DigiSpect Challenge"
                style={{ width: "365px", height: "auto", marginBottom: "20px" }}
              />
              <ChallengeText>
                A live tyre inspection test of speed and accuracy. Manual tools
                against DigiSpect Innovation. See how you measure up against
                other participants and
                <span style={{ color: "#B9FF01", fontWeight: "bold" }}>
                  &nbsp;win CASH prizes!
                </span>
              </ChallengeText>
            </LeftColumn>
            <RightColumn>
              <img
                src={miningIndonesia2025Logo}
                alt="Mining Indonesia 2025"
                style={{ width: "280px", height: "auto", marginBottom: "20px" }}
              />
              <BoothLocText>HALL C2 - Booth no. 725</BoothLocText>
              <PrimaryAction>
                <button onClick={goToRegister}>REGISTER NOW!</button>
              </PrimaryAction>
            </RightColumn>
          </ColumnContainer>
        </DesktopContent>

        <MobileContent css={collapseBreakpointCss.mobileContent}>
          <Heading>
            Join the AssetFindr
            <br />
            DigiSpect Inspection Challenge
          </Heading>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <img
              src={challengeLogoWhite}
              alt="DigiSpect Challenge"
              style={{ width: "280px", height: "auto", maxWidth: "90%" }}
            />
            <ChallengeText
              style={{
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              A live tyre inspection test of speed and accuracy. Manual tools
              against DigiSpect Innovation. See how you measure up against other
              participants and
              <span style={{ color: "#B9FF01", fontWeight: "bold" }}>
                &nbsp;win CASH prizes!
              </span>
            </ChallengeText>
            <img
              src={miningIndonesia2025Logo}
              alt="Mining Indonesia 2025"
              style={{ width: "250px", height: "auto", maxWidth: "90%" }}
            />
            <BoothLocText>HALL C2 - Booth no. 725</BoothLocText>
            <PrimaryAction>
              <button onClick={goToRegister}>REGISTER NOW!</button>
            </PrimaryAction>
          </div>
        </MobileContent>
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
  },
};
