import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import LogoImage from "images/assetfindr-logo.svg";
import mail from "images/mail.svg";
import { Link } from "react-router-dom"


const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12 gap-24`;
const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;
const PrimaryAction = styled.div`
  button {
    ${tw`rounded-full cursor-pointer px-8 py-3 text-sm sm:text-base sm:mt-6 sm:px-8 sm:py-4 font-semibold transition duration-300 bg-[#B9FF01] text-[#1D62FF] hocus:bg-[#B9FF01] hocus:text-[white]  border-none uppercase`}
  }`;
const Subheading = tw(SubheadingBase)`uppercase font-semibold text-white opacity-50`;
const ColumnHeading = tw.h1`font-semibold text-4xl`;
const Heading = styled.div`
  ${tw`flex items-center gap-4`}
  img {
    ${tw`w-[48px]`}
  }
  span {
    ${tw`text-2xl font-semibold text-white`}
  }
`;
const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm text-white font-normal`;
const VerticalDivider = tw.div`w-[1px] mt-12 bg-[#76AEFF]`;
const Divider = tw.div`h-[1px] mt-16 bg-[#76AEFF] w-full`;
const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between my-6`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-[9rem]`;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base text-white font-medium`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm lg:mx-3 lg:my-0 no-underline text-white
  font-semibold tracking-wide transition duration-300
  pb-1 hover:text-[#B9FF01] hocus:font-medium
`;


export const DesktopContainer = styled.div`
  ${tw`hidden lg:flex justify-center bg-[#185FFF] text-white -mb-8 -mx-8 px-8 pt-20 pb-8 lg:pt-24`}
  ${ColumnHeading} {
    ${tw`font-semibold mt-1 mb-4`}
   }
   ${Subheading} {
    ${tw`mb-0`}
   }
`;
export const MobileContainer = styled.div`
   ${tw`lg:hidden flex justify-center items-center bg-[#185FFF] text-white -mb-8 pt-10 pb-6 lg:pt-24 w-full`}
   ${SixColumns} {
    ${tw`flex flex-col text-left gap-0`}
   }
   ${Column} {
    ${tw`px-0 mx-6`}
   }
   ${ColumnHeading} {
    ${tw`text-[28px] font-semibold mt-1 mb-4`}
   }
   ${Subheading} {
    ${tw`mb-0`}
   }
   ${SubscribeNewsletterColumn} {
    ${tw`mt-0 flex flex-col text-left px-0 mx-6`}
   }
   ${SubscribeNewsletterContainer} {
    ${tw`mx-0`}
   }
   ${SubscribeText} {
    ${tw`font-normal text-sm`}
   }
   ${Divider} {
    ${tw`mx-6 my-6 w-[87%]`}
   }
   ${ThreeColRow} {
    ${tw`flex flex-row justify-between ml-3 mr-6 mt-4 mb-8`}
   }
   ${CopywrightNotice} {
    ${tw`text-sm font-normal`}
   }
   ${NavLink} {
    ${tw`text-sm font-normal mr-2`}
   }
`;


export default ({ collapseBreakpointClass = "lg" ,  handleClickButton}) => {

  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const goToSignup = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=628111245537&text=Hello%2C+I+would+like+to+request+a+demo+of+Assetfindr.+Could+you+please+assist+me%3F+My+details+are+as+follows%3A%0A%0A%E2%80%A2+Name%3A+%0A%0A%E2%80%A2+Email%3A+%0A%0A%E2%80%A2+Company%3A+%0A%0A%E2%80%A2+Role%3A+%0A%0AThank+you&type=phone_number&app_absent=0';
  };
  return (
    <>
      <DesktopContainer css={collapseBreakpointCss.desktopContainer}>
        <Content>
          <SixColumns>
            <Column>
              {/* <Subheading>REGISTER NOW!</Subheading> */}
              <ColumnHeading>Save Time, Save Money, Stay Ahead!</ColumnHeading>
              <SubscribeNewsletterContainer>
                <SubscribeText>
                  Effortlessly organize, track, and optimize asset performance in one place.
                </SubscribeText>
                {/* <SubscribeText>
                  Sign up now to experience the power of AssetFindr!
                </SubscribeText> */}
              </SubscribeNewsletterContainer>
              <PrimaryAction>
              {/* <button onClick={goToSignup}>
                Sign up now
              </button> */}
              </PrimaryAction>
            </Column>

            <VerticalDivider />

            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <Subheading>HAVE A QUESTION?</Subheading>
                <ColumnHeading>Contact us</ColumnHeading>
                <SubscribeText>
                  Tell us a little more and we’ll get in touch.
                </SubscribeText>
                <Heading>
                  <img src={mail} alt="Mail" />
                  <span>hello@assetfindr.com</span>
                </Heading>
              </SubscribeNewsletterContainer>
            </SubscribeNewsletterColumn>
          </SixColumns>

          <Divider />
          
          <ThreeColRow>
            <LogoContainer>
              <LogoImg src={LogoImage} />
            </LogoContainer>
            <CopywrightNotice>
              <NavLink
                className="nav-link"
                to="/privacy-policy"
                onClick={() => handleClickButton("privacyPolicy")}
              >
                Privacy Policy
              </NavLink>
              &copy; AssetFindr2024
            </CopywrightNotice>
          </ThreeColRow>
        </Content>
      </DesktopContainer>

      <MobileContainer css={collapseBreakpointCss.mobileContainer}>
        <Content>
          <SixColumns>
            <Column>
              {/* <Subheading>REGISTER NOW!</Subheading> */}
              <ColumnHeading>Save Time, Save Money, Stay Ahead!</ColumnHeading>
              <SubscribeNewsletterContainer>
                <SubscribeText>
                  Effortlessly organize, track, and optimize asset performance in one place.
                </SubscribeText>
                {/* <SubscribeText>
                  Sign up now to experience the power of AssetFindr!
                </SubscribeText> */}
              </SubscribeNewsletterContainer>
            <PrimaryAction>
            {/* <button onClick={goToSignup}>
              Sign up now
            </button> */}
            </PrimaryAction>
            </Column>

            <Divider />

            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <Subheading>HAVE A QUESTION?</Subheading>
                <ColumnHeading>Contact us</ColumnHeading>
                <SubscribeText>
                  Tell us a little more and we’ll get in touch.
                </SubscribeText>
                <Heading>
                  <img src={mail} alt="Mail" />
                  <span>hello@assetfindr.com</span>
                </Heading>
              </SubscribeNewsletterContainer>
            </SubscribeNewsletterColumn>
          </SixColumns>

          <Divider />
          
          <ThreeColRow>
            <LogoContainer>
              <LogoImg src={LogoImage} />
            </LogoContainer>
            <CopywrightNotice>
              <NavLink
                className="nav-link"
                to="/privacy-policy"
                onClick={() => handleClickButton("privacyPolicy")}
              >
                Privacy Policy
              </NavLink>
              &copy; AssetFindr2024
            </CopywrightNotice>
          </ThreeColRow>
        </Content>
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