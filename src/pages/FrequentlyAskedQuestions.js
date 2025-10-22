import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/AssetFindrFooter";
import Header from "components/headers/light.js";
import { SectionSubHeading } from "components/misc/Headings.js";
import { TextBodyBold, TextBody } from "components/misc/Typography";
import { digiscpectLogoLink } from "demos/DigiSpectLandingPage";


const NavHeader = styled(Header)`
    ${tw`max-w-none w-full fixed`}
  `;

const MainContainer = tw.div`py-32 px-6 sm:px-8 md:mx-16 h-full flex flex-col lg:max-w-6xl justify-self-center`;
const SectionContainer = tw.div`mb-10`;
const SubheadingTitle = tw(TextBodyBold)`py-4 block`
const SubheadingTitleList = tw(TextBodyBold)`pt-4 block`
const Subheading = tw(SectionSubHeading)`text-gray-900`

export default () => {
  
  return (
    <AnimationRevealPage>
      <NavHeader roundedHeaderButton={true} navWithColor={true} digispectLandingPage={digiscpectLogoLink}/>
      <MainContainer >
        <Subheading>How Do I Delete My Account?</Subheading>
        <TextBody>We're sorry to see you go! If you wish to delete your account, please follow the steps below:</TextBody>
        <SectionContainer>
          <SubheadingTitle>How to request account deletion:</SubheadingTitle>
          <TextBody>
            To permanently delete your account and all associated data, 
            please send an email to our Customer Support team at <TextBodyBold><u>cs@assetfindr.com</u></TextBodyBold>
          </TextBody>
          <SubheadingTitleList>What to include in your email:</SubheadingTitleList>
          <ul>
            <li>
              <TextBody>Subject:</TextBody> <TextBodyBold> Account Deletion Request </TextBodyBold>
            </li>
            <li>
              <TextBody>Your registered email address</TextBody>
            </li>
            <li>
              <TextBody>Your full name or company name (if applicable)</TextBody>
            </li>
            <li>
              <TextBody>Reason for deletion (optional, but helps us improve!)</TextBody>
            </li>
          </ul>
          <TextBody>
            If you have any questions or need assistance before deleting your account, feel free to reach out — we're here to help!
          </TextBody>
        </SectionContainer>
      </MainContainer>
      <div>
        <Footer/>
      </div>
    </AnimationRevealPage>
  );
};
