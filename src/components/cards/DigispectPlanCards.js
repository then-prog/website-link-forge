import React, { useRef, useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {  TextHeading5, TextCaptionLReg, TextCaptionLMed } from "components/misc/Typography";
import { useSearchParams } from "react-router-dom";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as XIcon } from "feather-icons/dist/icons/x.svg";

import { css } from "styled-components/macro"; //eslint-disable-line


export const PackageWrapper = styled.div(props => [
  props.totalPackage === 1 && tw`w-full`,
  props.totalPackage === 2 && tw`w-1/2`,
  props.totalPackage === 3 && tw`w-1/3`,
  props.totalPackage === 4 && tw`w-1/4`
])

export const IconListCard = styled.div(props => [
  props.totalPackage < 3 && tw`col-span-1`,
  props.totalPackage === 3 && tw`col-span-1`,
  props.totalPackage > 3 && tw`col-span-2`
])

export const DescriptionListCard = styled.div(props => [
  props.totalPackage === 3 && tw`col-span-11 pl-[10px]`,
  props.totalPackage !== 3 && tw`col-span-10`,
])

export const PackageCard = styled.div(props => [
  tw`h-[268px] rounded-lg border border-solid border-[#E7E8EA] py-8 px-5`,
  props.active && tw`bg-[#FAFBFF] border-[#7BA3FF]`
])

export const PackageFeature = styled.div`
  ${tw`grid grid-cols-12 items-start px-2 py-1`}
`

export const UpgradeButton = styled.button`
  ${tw`px-4 py-[12px] cursor-pointer rounded-lg bg-[#185FFF] text-white border-transparent text-sm`}
`

export const IconCheck = styled(CheckIcon).withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => [
  tw`h-[16px] w-[16px] px-1 py-1`,
  active ? tw`text-[#89869A]` : tw`text-[#3976FF]`,
]);

export const IconClose = styled(XIcon)`
  ${tw`h-[24px] w-[24px] text-[#FF001F]`}
`

export const SliderButton = styled.button(props => [
  tw `w-[16px] h-[16px] rounded-[8px] border-0`,
  props.active ? tw`bg-[#185FFF]` : tw`bg-[#E7E8EA]`
])

export const DesktopContainer = styled.div`
  ${tw`hidden lg:flex flex flex-row justify-items-center pb-16 px-8 gap-x-4`}
`;

export const MobileContainer = styled.div`
  ${tw`lg:hidden flex flex-col pb-16 px-8`}
  ${PackageCard} {
    ${tw`w-[240px]`}
  }
`;

export default ({  collapseBreakpointClass = "lg"}) => {
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const [searchParams] = useSearchParams();
  const digispectPackage = searchParams.get("package");

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      const child = slider.children[0];
      if (!child) return;

      const slideWidth = child.offsetWidth;
      const gap = parseInt(window.getComputedStyle(child).marginRight, 10);
      const totalWidth = slideWidth + gap;

      const scrollLeft = slider.scrollLeft;
      const index = Math.round(scrollLeft / totalWidth);
      setActiveIndex(index);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index) => {
    const width = sliderRef.current.offsetWidth ;
    sliderRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    });
  };

  const packages =  [
        {
          active: digispectPackage === 'DIGISPECT_PRO_PLUS',
          packageInformation: {
            package_name: 'DigiSpect PRO+',
            package_features: [
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Access inspection history for up to the
                  <TextCaptionLMed> last 365 days</TextCaptionLMed>
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Download reports for up to
                  <TextCaptionLMed> 365-day </TextCaptionLMed>custom range
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Access inspection reports via web
                </TextCaptionLReg>),
              }, 
            ],
          },
          show: true,
        },
        {
          active: digispectPackage === 'DIGISPECT_PRO',
          packageInformation: {
            package_name: 'DigiSpect PRO',
            package_features: [
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Access inspection history for up to the
                  <TextCaptionLMed> last 180 days</TextCaptionLMed>
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Download reports for up to
                  <TextCaptionLMed> 31-day </TextCaptionLMed>custom range
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Access inspection reports via web
                </TextCaptionLReg>),
              },                            
            ],
          },
          show: digispectPackage !== 'DIGISPECT_PRO_PLUS' ,
        },
        {
          active: digispectPackage === 'DIGISPECT_LITE' || digispectPackage === 'LITE',
          packageInformation: {
            package_name: 'DigiSpect Lite',
            package_features: [
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Access inspection history for up to the
                  <TextCaptionLMed> last 31 days</TextCaptionLMed>
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Download reports for up to
                  <TextCaptionLMed> 31-day </TextCaptionLMed>custom range
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Access inspection reports via web
                </TextCaptionLReg>),
              },                            
            ],
          },
          show: digispectPackage === 'DIGISPECT_BASIC' || digispectPackage === 'DIGISPECT_LITE' || digispectPackage === 'LITE',
        },
        {
          active: digispectPackage === 'DIGISPECT_BASIC',
          packageInformation: {
            package_name: 'DigiSpect Basic',
            package_features: [
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Maximum of
                  <TextCaptionLMed> 12 active</TextCaptionLMed> inspection data
                </TextCaptionLReg>),
              },
              {
                icon: 'check',
                description:
                (<TextCaptionLReg>
                  Can
                  <TextCaptionLMed> download up to 12</TextCaptionLMed> inspection data
                </TextCaptionLReg>),
              },
              {
                icon: 'close',
                description:
                (<TextCaptionLReg>
                  <TextCaptionLMed>Cannot</TextCaptionLMed> access inspection history beyond 12 data
                </TextCaptionLReg>),
              },
            ],
          },
          show: digispectPackage === 'DIGISPECT_BASIC',
        },
      ];

  const currentPackages = packages.filter(item => item.show)

  return (
    <div>
      <DesktopContainer css={collapseBreakpointCss.desktopContent}>
        {currentPackages.map((pkg, idxPkg) => (
          <PackageWrapper totalPackage={currentPackages.length} key={idxPkg}>
            <div>
              <PackageCard active={pkg.active}>
                <div tw="pb-2">
                  <TextHeading5>{pkg.packageInformation.package_name}</TextHeading5>
                  {pkg.active && 
                    <div>
                      <TextCaptionLReg tw="text-[#185FFF]">Current plan</TextCaptionLReg>
                    </div>
                  }
                </div>
                <div tw="mt-4">
                  {pkg.packageInformation.package_features.map((feature, featureIdx) => (
                    <PackageFeature key={featureIdx}>
                      <IconListCard totalPackage={currentPackages.length}>
                        {feature.icon === 'check' && <IconCheck active={pkg.active} />} 
                        {feature.icon === 'close' && <IconClose />} 
                      </IconListCard>
                      <DescriptionListCard totalPackage={currentPackages.length}>
                        {feature.description}
                      </DescriptionListCard>
                    </PackageFeature>
                  ))
                  }

                </div>
              </PackageCard>
            </div>
          </PackageWrapper>
        ))}
      </DesktopContainer>

      <MobileContainer css={collapseBreakpointCss.mobileContent}>
        <div tw="w-full">
          <div
            ref={sliderRef}
            tw="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-8"
          >
            {currentPackages.map((pkg, idxPkg) => (
              <div
                key={idxPkg}
                tw="snap-start flex-shrink-0"
              >
                <PackageCard active={pkg.active}>
                  <div tw="pb-2">
                    <TextHeading5>{pkg.packageInformation.package_name}</TextHeading5>
                    {pkg.active && 
                      <div>
                        <TextCaptionLReg tw="text-[#185FFF]">Current plan</TextCaptionLReg>
                      </div>
                    }
                  </div>
                  <div tw="mt-4">
                    {pkg.packageInformation.package_features.map((feature, featureIdx) => (
                      <PackageFeature key={featureIdx}>
                        <div tw="col-span-2">
                          {feature.icon === 'check' && <IconCheck active={pkg.active} />} 
                          {feature.icon === 'close' && <IconClose />} 
                        </div>
                        <div tw="col-span-10">{feature.description}</div>
                      </PackageFeature>
                    ))
                    }

                  </div>
                </PackageCard>
              </div>
            ))}
          </div>

          <div tw="flex justify-center gap-2 mt-4">
            {currentPackages.map((_, index) => (
              <SliderButton     
                key={index}
                onClick={() => scrollToSlide(index)}
                active={index === activeIndex}
              />
            ))}
          </div>
        </div>
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
