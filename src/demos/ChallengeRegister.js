import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import challengeOverviewImage from "images/challenge-overview.png";
import howItWorksImage1 from "images/how-it-works1.png";
import howItWorksImage2 from "images/how-it-works2.png";
import howItWorksImage3 from "images/how-it-works3.png";
import shareExcitementImage from "images/share-excitement.png";
import winPrizesImage from "images/win-prizes.png";
import { digiscpectLogoLink } from "./DigiSpectLandingPage";
import Footer from "components/footers/AssetFindrFooter";
import { useLocation } from "react-router-dom";
import {
  NavLinks,
  NavLink,
  PrimaryLinkWithATag,
} from "components/headers/light.js";
import starIcon from "images/star-icon.png";
import { css } from "styled-components/macro"; //eslint-disable-line

const API_BASE =
  import.meta?.env?.VITE_API_BASE_URL || "https://api.assetfindr.com";
const API_URL = `${API_BASE}/v1/register-af-challenge`;

const Container = tw.div`bg-[#1D62FF] min-h-screen pt-20`;
const FormSection = tw.div`py-8 px-8`;
const FormContainer = tw.div`max-w-6xl mx-auto`;
const PageTitle = tw.h1`text-4xl md:text-5xl font-black text-center mb-8 text-[#B9FF01]`;

const ChallengeOverviewSection = tw.div`px-8 pt-4`;
const OverviewContainer = tw.div`max-w-6xl mx-auto`;

const HowItWorksSection = tw.div`py-8 px-8`;
const HowItWorksContainer = tw.div`max-w-6xl mx-auto`;
const HowItWorksTitle = tw.h2`text-4xl font-black text-[#B9FF01] mb-5 text-left`;

const ShareSection = tw.div`py-8 px-8`;
const ShareContainer = tw.div`max-w-6xl mx-auto`;

const FormGrid = tw.div`grid grid-cols-1 md:grid-cols-2 gap-6`;
const InputGroup = tw.div`space-y-2`;
const InputLabel = tw.label`block text-white font-semibold text-lg`;
const TextInput = styled.input`
  ${tw`w-[90%] px-4 py-2 border-none rounded-full text-lg bg-white focus:outline-none transition-colors`}
`;
const SelectInput = styled.select`
  ${tw`w-full px-4 py-2 border-none rounded-full text-lg bg-white focus:outline-none transition-colors`}
`;

const RegisterButton = styled.button`
  ${tw`bg-[#B9FF01] text-[#1D62FF] border-none font-black text-xl px-12 py-3 rounded-full shadow-lg transition duration-300 hover:text-white`}
  ${(props) =>
    props.disabled &&
    tw`bg-[#B9FF01] opacity-[85%] cursor-not-allowed hover:scale-100`}
`;
const ButtonContainer = tw.div`flex justify-start mt-8`;

const TermsSection = tw.div``;
const TermsTitle = tw.h3`text-2xl font-bold text-white mb-6`;
const TermsList = styled.div`
  ${tw`space-y-4 text-sm text-white overflow-y-auto leading-relaxed`}
  max-height: 32rem;
`;
const TermsItem = tw.div``;
const TermsHeader = tw.h4`font-semibold text-white mb-2`;
const TermsContent = tw.div`ml-4 leading-relaxed text-blue-100`;
const TermsSubItem = styled.div`
  ${tw`mb-2 flex`}
  .letter {
    ${tw`w-6 flex-shrink-0`}
  }
  .content {
    ${tw`flex-1`}
  }
`;

const ErrorMessage = styled.div`
  ${tw`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6`}
`;

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
`;

const ModalContent = styled.div`
  ${tw`bg-white rounded-3xl p-12 max-w-lg mx-4 text-center shadow-2xl`}
`;

const ModalTitle = styled.h2`
  ${tw`text-2xl font-bold text-gray-900 mb-6`}
`;

const ModalText = styled.p`
  ${tw`text-gray-600 text-sm px-8 mb-8 leading-relaxed`}
`;

const OkButton = styled.button`
  ${tw`bg-[#1D62FF] text-white font-semibold text-lg px-12 py-3 rounded-full border-none cursor-pointer`}
`;

export default function ChallengeRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    companyName: "",
    position: "",
    relatedIndustry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // 'success', 'error', or ''
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For mobile number, only allow numeric input
    if (name === "mobileNo") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("");
    setErrorMessage("");

    try {
      const apiPayload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        phone_number: formData.mobileNo,
        reference_role: formData.position,
        related_industry: formData.relatedIndustry,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const message =
          errorData.message ||
          errorData.error ||
          `Registration failed (${response.status})`;
        throw new Error(message);
      }

      setShowSuccessModal(true);
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "Registration failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setSubmitStatus("");
    setErrorMessage("");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
      companyName: "",
      position: "",
      relatedIndustry: "",
    });
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.mobileNo.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.companyName.trim() !== "" &&
      formData.position.trim() !== "" &&
      formData.relatedIndustry.trim() !== ""
    );
  };

  const contactRef = React.useRef(null);

  const StyledHeader = styled(Header)`
    ${tw`max-w-none w-full fixed z-10`}
  `;
  const location = useLocation();

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

      {/* <NavLinkWithATag href="https://app.assetfindr.com" tw="lg:ml-12!">
        Login
      </NavLinkWithATag> */}
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
  }, [location]);

  return (
    <AnimationRevealPage>
      <StyledHeader
        links={defaultLinks}
        digispectLandingPage={digiscpectLogoLink}
      />
      <Container>
        {/* PAGE 1: Main Hero Section with Prize Info */}
        <ChallengeOverviewSection>
          <OverviewContainer>
            <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Right: Podium Image */}
              <div tw="flex justify-center">
                <img
                  src={winPrizesImage}
                  alt="Compete and Win - Podium with Winners"
                  tw="w-full max-w-lg"
                />
              </div>
              {/* Left: Prize Text */}
              <div tw="text-center lg:text-left font-bold">
                <h1 tw="text-4xl md:text-5xl font-black text-white  leading-tight mb-2">
                  Compete and Win a Total of{" "}
                  <span tw="text-[#B9FF01]">6 Million Rupiah!</span>
                </h1>
              </div>
            </div>

            {/* Bottom: Challenge Overview Text and Tire Image */}
            <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Challenge Overview Text */}
              <div>
                <h2 tw="text-3xl md:text-4xl font-black text-[#B9FF01] mb-6 -mt-10">
                  Challenge Overview
                </h2>
                <p tw="text-white text-lg leading-relaxed mb-4">
                  Step into an interactive competition where you'll inspect a
                  real truck tyre, first with <strong>manual tools</strong>,
                  then with <strong>AssetFindr's DigiSpect</strong>.
                </p>
                <p tw="text-white text-lg leading-relaxed">
                  More than just a contest, this challenge lets you experience
                  first-hand the{" "}
                  <span tw="text-[#B9FF01] font-bold">
                    efficiency, accuracy, and ease
                  </span>{" "}
                  of DigiSpect compared to manual inspections.
                </p>
              </div>

              {/* Right: Tire Inspection Image with Labels */}
              <div tw="relative">
                <img
                  src={challengeOverviewImage}
                  alt="Manual vs DigiSpect Tire Inspection"
                  tw="w-full rounded-xl"
                />
              </div>
            </div>
          </OverviewContainer>
        </ChallengeOverviewSection>

        {/* PAGE 2: How it Works */}
        <HowItWorksSection>
          <HowItWorksContainer>
            <HowItWorksTitle>How it works</HowItWorksTitle>
            <div tw="flex flex-col md:flex-row w-full gap-4">
              <img
                src={howItWorksImage1}
                alt="How it Works - Register"
                tw="w-full md:w-1/3 rounded-2xl"
              />
              <img
                src={howItWorksImage2}
                alt="How it Works - Take the Challenge"
                tw="w-full md:w-1/3 rounded-2xl"
              />
              <img
                src={howItWorksImage3}
                alt="How it Works - Win Cash Prizes"
                tw="w-full md:w-1/3 rounded-2xl"
              />
            </div>
          </HowItWorksContainer>
        </HowItWorksSection>

        {/* PAGE 2: Share the Excitement */}
        <ShareSection>
          <ShareContainer>
            <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 tw="text-3xl md:text-4xl font-black text-[#B9FF01] mb-6">
                  Share the excitement
                </h2>
                <p tw="text-white text-lg leading-relaxed mb-4">
                  Props: digital inspection tablet, manual tools, "I Beat the
                  Clock!", "Tyre Inspector Champion!" badges. Share on social
                  media and include the hashtags #DigiSpectChallenge
                  #AssetFindr, #fastaccuratedigital #MiningID25 (Best daily
                  posts will be selected to win extra merch).
                </p>
              </div>
              <div tw="flex justify-center">
                <img
                  src={shareExcitementImage}
                  alt="Share the Excitement - Badges and Props"
                  tw="w-full max-w-lg rounded-2xl"
                />
              </div>
            </div>
          </ShareContainer>
        </ShareSection>

        <FormSection>
          <FormContainer>
            <PageTitle>Registration Form</PageTitle>

            <div tw="max-w-4xl mx-auto">
              {submitStatus === "error" && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              )}

              <form onSubmit={handleSubmit}>
                <FormGrid>
                  <InputGroup>
                    <InputLabel htmlFor="firstName">First Name:</InputLabel>
                    <TextInput
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      maxLength={50}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="lastName">Last Name:</InputLabel>
                    <TextInput
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      maxLength={50}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="mobileNo">Mobile No.:</InputLabel>
                    <TextInput
                      type="tel"
                      id="mobileNo"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="email">Email:</InputLabel>
                    <TextInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                      title="Please enter a valid email address"
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="companyName">Company Name:</InputLabel>
                    <TextInput
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      maxLength={100}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="position">Role:</InputLabel>
                    <TextInput
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      maxLength={50}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="relatedIndustry">
                      Related Industry:
                    </InputLabel>
                    <SelectInput
                      id="relatedIndustry"
                      name="relatedIndustry"
                      value={formData.relatedIndustry}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your industry</option>
                      <option value="Mining & Quarrying">
                        Mining & Quarrying
                      </option>
                      <option value="Oil, Gas & Energy">
                        Oil, Gas & Energy
                      </option>
                      <option value="Agriculture & Plantation">
                        Agriculture & Plantation
                      </option>
                      <option value="Logistics & Transportation">
                        Logistics & Transportation
                      </option>
                      <option value="Retail & FMCG Distribution">
                        Retail & FMCG Distribution
                      </option>
                      <option value="Bus Operators">Bus Operators</option>
                      <option value="Tyre Dealers & Distributors">
                        Tyre Dealers & Distributors
                      </option>
                      <option value="Government">Government</option>
                      <option value="Others">Others</option>
                    </SelectInput>
                  </InputGroup>

                  <InputGroup>
                    <ButtonContainer>
                      <RegisterButton
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                      >
                        {isSubmitting ? "Registering..." : "Register"}
                      </RegisterButton>
                    </ButtonContainer>
                  </InputGroup>
                </FormGrid>
              </form>
            </div>

            <div tw="mt-16 max-w-4xl mx-auto">
              <TermsSection>
                <TermsTitle>Terms & Conditions:</TermsTitle>
                <TermsList>
                  <TermsItem>
                    <TermsHeader>1. Eligibility</TermsHeader>
                    <TermsContent>
                      <TermsSubItem>
                        <span className="letter">a.</span>
                        <span className="content">
                          The challenge is open to all individuals who register
                          online or directly at the booth.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">b.</span>
                        <span className="content">
                          Participants must comply with all instructions from
                          facilitators during the competition.
                        </span>
                      </TermsSubItem>
                    </TermsContent>
                  </TermsItem>

                  <TermsItem>
                    <TermsHeader>2. Challenge Flow</TermsHeader>
                    <TermsContent>
                      <TermsSubItem>
                        <span className="letter">a.</span>
                        <span className="content">
                          Each participant is paired with a staff facilitator
                          for the challenge, which consists of two stages:
                          manual inspection and DigiSpect inspection of a truck
                          tyre.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">b.</span>
                        <span className="content">
                          During the manual stage, participants inspect the demo
                          tyre according to a set checklist (Brand, Model, Size,
                          tread depth, air pressure, visual defects).
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">c.</span>
                        <span className="content">
                          During the DigiSpect stage, participants use
                          DigiSpect's wireless digital inspection tool and
                          mobile app on the same tyre.
                        </span>
                      </TermsSubItem>
                    </TermsContent>
                  </TermsItem>

                  <TermsItem>
                    <TermsHeader>3. Scoring System</TermsHeader>
                    <TermsContent>
                      <TermsSubItem>
                        <span className="letter">a.</span>
                        <span className="content">
                          Speed score: Total time to complete both manual and
                          DigiSpect inspections; fastest time wins.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">b.</span>
                        <span className="content">
                          Accuracy score: Average Remaining Tread Depth (ARTD)
                          measured by manual and DigiSpect are compared for
                          deviation; smallest deviation wins.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">c.</span>
                        <span className="content">
                          The winner is determined by a weighted score (50%
                          speed, 50% accuracy); highest score wins.
                        </span>
                      </TermsSubItem>
                    </TermsContent>
                  </TermsItem>

                  <TermsItem>
                    <TermsHeader>4. Leaderboard & Prizes</TermsHeader>
                    <TermsContent>
                      <TermsSubItem>
                        <span className="letter">A.</span>
                        <span className="content">
                          The live leaderboard will be displayed on a big screen
                          throughout the event.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">B.</span>
                        <span className="content">
                          Top scores of the hour or day receive special
                          badges/certificates (digital or physical, with
                          notification via Whatsapp).
                        </span>
                      </TermsSubItem>
                    </TermsContent>
                  </TermsItem>

                  <TermsItem>
                    <TermsHeader>5. Documentation & Social Media</TermsHeader>
                    <TermsContent>
                      <TermsSubItem>
                        <span className="letter">A.</span>
                        <span className="content">
                          Organizers reserve the right to document all challenge
                          activities for promotional use on digital and social
                          media platforms.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">B.</span>
                        <span className="content">
                          Participants are encouraged to share challenge
                          experiences and photos on social media with designated
                          hashtags (#DigiSpectChallenge, #AssetFindr,
                          #fastaccuratedigital, #MiningID25).
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">C.</span>
                        <span className="content">
                          Selected posts may win additional merchandise and
                          props.
                        </span>
                      </TermsSubItem>
                    </TermsContent>
                  </TermsItem>

                  <TermsItem>
                    <TermsHeader>6. General</TermsHeader>
                    <TermsContent>
                      <TermsSubItem>
                        <span className="letter">A.</span>
                        <span className="content">
                          All prizes, badges, certificates, and merchandise will
                          only be awarded to participants who complete the
                          challenge according to the official rules.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">B.</span>
                        <span className="content">
                          Decisions of the organizers and facilitators are final
                          and binding.
                        </span>
                      </TermsSubItem>
                      <TermsSubItem>
                        <span className="letter">C.</span>
                        <span className="content">
                          Any behavior deemed dishonest or disruptive may result
                          in disqualification. By participating, entrants agree
                          to all terms and conditions and consent to
                          data/documentation usage for promotion.
                        </span>
                      </TermsSubItem>
                    </TermsContent>
                  </TermsItem>
                </TermsList>
              </TermsSection>
            </div>
          </FormContainer>
        </FormSection>

        <div ref={contactRef}>
          <Footer />
        </div>

        {showSuccessModal && (
          <ModalOverlay>
            <ModalContent>
              <img src={starIcon} alt="star-icon" />
              <ModalTitle>Registration Completed!</ModalTitle>
              <ModalText>
                Thank you! You have been successfully registered for the
                Assetfindr Challenge.
                <br />
                Visit our exhibition booth from September 17-21, 2025.
              </ModalText>
              <OkButton onClick={handleCloseModal}>OK</OkButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </AnimationRevealPage>
  );
}
