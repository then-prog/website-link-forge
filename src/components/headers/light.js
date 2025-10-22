import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import challengeLogoWhite from "images/inspection-challenge-logo-white.png";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/assetfindr-logo-v3.png";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { Link } from "react-router-dom";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 no-underline text-white
  font-semibold tracking-wide transition duration-300
  pb-1 hover:text-[#B9FF01] hocus:font-medium
`;

export const NavLinkWithATag = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 no-underline text-white
  font-semibold tracking-wide transition duration-300
  pb-1 hover:text-[#B9FF01] hocus:font-medium
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0 font-semibold
`;

export const PrimaryLinkWithATag = tw(NavLinkWithATag)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0 font-semibold cursor-pointer
`;

export const LogoWrapper = tw.div`flex`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-[9rem] mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between bg-[#185FFF80] bg-opacity-50 px-8 py-2`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-white transition duration-300 bg-transparent text-white border-none
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 px-8 py-4 border text-center text-white bg-[#185FFF] bg-opacity-[70]`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center px-10 py-2 bg-[#185FFF80] bg-opacity-50 border-b-2 border-solid border-[#185FFF80] border-opacity-[50]
`;

export default ({
  roundedHeaderButton = false,
  handleClickNavbar,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
  navWithColor = false,
  digispectLandingPage,
}) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */

  const [navColor, setnavColor] = React.useState(navWithColor);
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavColor(true) : setnavColor(false);
  };

  React.useEffect(() => {
    if (!navWithColor) {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, [navWithColor]);

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink
        className="nav-link"
        onClick={() => handleClickNavbar("home")}
        to="/#home"
      >
        Home
      </NavLink>
      <NavLink
        className="nav-link"
        onClick={() => handleClickNavbar("features")}
        to="/#features"
      >
        Features
      </NavLink>
      <NavLink
        className="nav-link"
        onClick={() => handleClickNavbar("contact")}
        to="/#contact-us"
      >
        Contact Us
      </NavLink>
      {/* <NavLinkWithATag href="https://app.assetfindr.com" tw="lg:ml-12!">
        Login
      </NavLinkWithATag> */}
      <PrimaryLinkWithATag
        css={
          roundedHeaderButton &&
          tw`rounded-full bg-[#B9FF01] text-[#1D62FF] hocus:bg-[#B9FF01] hocus:text-[white] font-semibold`
        }
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=628111245537&text=Hello%2C+I+would+like+to+request+a+demo+of+Assetfindr.+Could+you+please+assist+me%3F+My+details+are+as+follows%3A%0A%0A%E2%80%A2+Name%3A+%0A%0A%E2%80%A2+Email%3A+%0A%0A%E2%80%A2+Company%3A+%0A%0A%E2%80%A2+Role%3A+%0A%0AThank+you&type=phone_number&app_absent=0"
      >
        Get Demo
      </PrimaryLinkWithATag>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink to="/#home" onClick={() => handleClickNavbar("home")}>
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  const challengeLogoLink = (
    <LogoLink to="/challenge#home">
      <img src={challengeLogoWhite} alt="challenge-logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks
        css={collapseBreakpointCss.desktopNavLinks}
        style={{
          backgroundColor: navColor ? "#185fff" : "transparent",
          border: "none",
        }}
      >
        <LogoWrapper>
          {logoLink}
          {digispectLandingPage}
          {challengeLogoLink}
        </LogoWrapper>
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
        style={{
          backgroundColor: navColor ? "#185fff" : "transparent",
        }}
      >
        <LogoWrapper>{logoLink}</LogoWrapper>
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          <div tw="flex justify-center flex-col items-center ">
            {digispectLandingPage}
            <div tw="-mt-4">{challengeLogoLink}</div>
          </div>

          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
