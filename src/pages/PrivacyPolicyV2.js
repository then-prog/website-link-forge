import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/AssetFindrFooter";
import Header from "components/headers/light.js";
import { SectionHeading, SectionSubHeading, Subheading2 } from "components/misc/Headings.js";
import { TextBodyBold, TextBody } from "components/misc/Typography";
import { digiscpectLogoLink } from "demos/DigiSpectLandingPage";


const NavHeader = styled(Header)`
    ${tw`max-w-none w-full fixed`}
  `;

const MainContainer = tw.div`py-32 px-6 sm:px-8 md:mx-16 h-full flex flex-col lg:max-w-6xl justify-self-center`;
const Divider = tw.div`border-b-0 border-solid my-4 w-full text-gray-600`;
const SectionContainer = tw.div`mb-10`;
const SubheadingTitle = tw(TextBodyBold)`py-4 block`

const ItemList = ({items}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}> 
          {item.title && <TextBodyBold> {item.title} </TextBodyBold>}
          <TextBody>{item.description}</TextBody>
        </li>
      ))}
    </ul>
  )
}


export default () => {
  
  const privacyPolicyRef = React.useRef(null);
  const handleClickButton = (name) => {
    switch (name) {
      case "privacyPolicy":
        privacyPolicyRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const definitionsDataList = [
    {title: 'Account', description: ': A unique account created for You to access the Service.'},
    {title: 'Application', description: ': The tyre inspection software program provided by the Company, referred to as AssetFindr.'},
    {title: 'Company', description: ': PT Solusi Berkat Inovasi, located at Kel. Meruya Utara, Kec. Kembangan, Kota Adm. Jakarta Barat, Provinsi DKI Jakarta, 11620, Indonesia.'},
    {title: 'Country', description: ': Indonesia'},
    {title: 'Device', description: ': Any device (e.g., computer, cellphone, or tablet) that can access the Service.'},
    {title: 'Personal Data', description: ': Any information relating to an identified or identifiable individual.'},
    {title: 'Service', description: ': The Application and associated tyre inspection hardware provided by the Company.'},
    {title: 'Service Provider', description: ': Any person or entity processing data on behalf of the Company to facilitate or improve the Service.'},
    {title: 'Usage Data', description: ': Data collected automatically during Your use of the Service.'},
    {title: 'You', description: ': The individual or legal entity using the Service.'},
  ]
  const personalDataList = [
    {description: 'Email address'},
    {description: 'First name and last name'},
    {description: 'Password (stored securely in encrypted form)'},
  ]
  const tyreAndVehicleDataList = [
    {description: 'Tyre specifications (e.g., size, tread depth, brand)'},
    {description: 'Vehicle specifications (e.g., brand, model)'},
    {description: 'Measurement results from the inspection'},    
  ]

  const usageDataList = [
    {description: 'Frequency and timestamps of inspections'},
    {description: 'Hardware connection logs'},
    {description: 'Diagnostic data from Your Device (e.g., IP address, device type, operating system) to ensure proper functionality'},    
  ]

  const cookiesAndIdentifierDataList = [
    {description: 'Cookies (small data files stored on Your Device)'},
    {description: 'Device identifiers (e.g., IP address, unique device ID) These help Us enhance functionality, analyze usage trends, and improve the Service. You can manage cookie preferences through Your browser or Device settings.'},
  ]

  const yourPersonalDataList = [
    {title: 'To provide and maintain the Service', description: ': Including generating inspection reports and monitoring Service performance.'},
    {title: 'To manage Your Account', description: ': Enabling access to Service features as a registered user.'},
    {title: 'To contact You', description: ': Via email or other electronic communication for updates, support, or security notifications related to the Service.'},
    {title: 'To improve the Service', description: ': Analyzing tyre/vehicle data, usage trends, and Cookies/Identifiers to enhance functionality and user experience.'},
    {title: 'To manage Your requests', description: ': Responding to Your inquiries or support needs.'},
    {title: 'For legal compliance', description: ': Meeting obligations under applicable laws or resolving disputes.'},
  ]

  const sharingPersonalDataList = [
    {title: 'With Service Providers', description: ': To process data, monitor usage, or improve the Service.'},
    {title: 'With Affiliates', description: ': Our parent company or subsidiaries, bound by this Privacy Policy.'},
    {title: 'With Hardware Providers', description: ': We may share inspection data with third-party hardware manufacturers to ensure compatibility and functionality.'},
    {title: 'For business transfers', description: ': During a merger, sale, or restructuring where Your data is an asset.'},
    {title: 'With Your consent', description: ': For any other purpose You approve.'},
  ]

  const retentionPersonalDataList = [
    {description: 'Account information (e.g., email, name) is kept while Your Account is active or as needed to comply with legal obligations.'},
    {description: 'Tyre/vehicle data and inspection results are retained to maintain Your inspection history, unless You request deletion.'},
    {description: 'Usage Data and Cookies/Identifiers are kept for internal analysis, typically for a shorter period, unless required for security or legal purposes.'},
  ]

  const rightsDataList = [
    {title: 'Access', description: ': Request a copy of the data We hold about You.'},
    {title: 'Correction', description: ': Request correction of inaccurate or incomplete data.'},
    {title: 'Deletion', description: ': Request removal of Your data (see below).'},
    {title: 'Restriction', description: ': Request We limit processing of Your data in certain cases.'},
    {title: 'Objection', description: ': Object to processing based on Our legitimate interests.'},
    {title: 'Complaint', description: ': Lodge a complaint with a data protection authority.'},
  ]

  const deletePersonalDataList = [
    {description: 'Signing into Your Account and managing Your data in the settings.'},
    {description: 'Contacting Us at cs@assetfindr.com.'},
  ]

  const disclosurePersonalDataList = [
    {title: 'Required by law', description: ': In response to valid requests from courts or government agencies.'},
    {title: 'For business transactions', description: ': During a merger or sale, with notice provided to You.'},
    {title: 'To protect rights', description: ': To defend Our property, prevent wrongdoing, or ensure user safety.'},
  ]

  const cookiesAndIdentifierDataListV2 = [
    {title: 'Essential Cookies', description: ': Necessary for the Service to function.'},
    {title: 'Analytics Cookies', description: ': To understand how You use the Service. You can disable Cookies via Your browser or Device settings, though this may affect Service functionality.'},
  ]

  const contactUslDataList = [
    {title: 'Email', description: ': cs@assetfindr.com'},
    {title: 'Address', description: ':  PT Solusi Berkat Inovasi, Kel. Meruya Utara, Kec. Kembangan, Kota Adm. Jakarta Barat, Provinsi DKI Jakarta, 11620, Indonesia'},
  ]

  return (
    <AnimationRevealPage>
      <NavHeader roundedHeaderButton={true} navWithColor={true} digispectLandingPage={digiscpectLogoLink}/>
      <MainContainer ref={privacyPolicyRef}>
        <SectionHeading>Privacy Policy</SectionHeading>
        <SectionContainer>
          <TextBodyBold>Last updated: March 06, 2025</TextBodyBold>
        </SectionContainer>
        <SectionContainer>
          <TextBody>Welcome to AssetFindr! We are committed to safeguarding Your privacy and 
            ensuring Your data is handled responsibly under applicable laws. This Privacy Policy 
            explains how PT Solusi Berkat Inovasi ("the Company," "We," "Us," or "Our") collects, uses, 
            and discloses Your information when You use Our tyre inspection application and hardware 
            (collectively, the "Service"). It also outlines Your privacy rights and how the law protects You. 
            By using the Service, You agree to the collection and use of information as described in this 
            Privacy Policy.
          </TextBody>
        </SectionContainer>


        <Divider/>

        <SectionSubHeading>Interpretation and Definitions</SectionSubHeading>
        <SectionContainer>
          <Subheading2>Interpretation</Subheading2>
          <TextBody>
            Words with capitalized initial letters have specific meanings defined below. 
            These definitions apply whether the terms appear in singular or plural form.
          </TextBody>
          <Subheading2>Definitions</Subheading2>
          <ItemList items={definitionsDataList}/>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Collecting and Using Your Personal Data</SectionSubHeading>
        <SectionContainer>
          <Subheading2>Types of Data Collected</Subheading2>
          <SubheadingTitle>Personal Data</SubheadingTitle>
          <TextBody>
            To use the Service, You must register an Account. We collect the following personally identifiable information:
          </TextBody>
          <ItemList items={personalDataList}/>

          <SubheadingTitle>Tyre and Vehicle Data</SubheadingTitle>
          <TextBody>
            When You use Our hardware to inspect tyres, We collect:
          </TextBody>
          <ItemList items={tyreAndVehicleDataList}/>
          <TextBody>
            This data is stored on Our servers to provide You with inspection reports and maintain Your inspection history.
          </TextBody>

          <SubheadingTitle>Location Data (Optional)</SubheadingTitle>
          <TextBody>
            We may collect Your location data during a tyre inspection, but only if You choose to provide it. This data associates inspection results with a specific location and is not collected unless You enable this feature in Your Device settings.
          </TextBody>

          <SubheadingTitle>Pictures</SubheadingTitle>
          <TextBody>
            We may collect pictures of tyres captured during inspections using Our hardware or Your Device’s camera, with Your permission.
          </TextBody>

          <SubheadingTitle>Usage Data</SubheadingTitle>
          <TextBody>
            Usage Data is collected automatically when You use the Service, including:
          </TextBody>
          <ItemList items={usageDataList}/>

          <SubheadingTitle>Cookies and Identifiers</SubheadingTitle>
          <TextBody>
            If You access the Service via a web interface or if We use analytics tools, We may collect:
          </TextBody>
          <ItemList items={cookiesAndIdentifierDataList}/>

          <Subheading2>Use of Your Personal Data</Subheading2>
          <TextBody>
            We may use Your data for the following purposes:
          </TextBody>
          <ItemList items={yourPersonalDataList}/>

          <Subheading2>Sharing Your Personal Data</Subheading2>
          <TextBody>
            We may share Your data in these situations:
          </TextBody>
          <ItemList items={sharingPersonalDataList}/>
          <TextBody>
            We do not share tyre/vehicle data or inspection results with other users or the public.
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Retention of Your Personal Data</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            We retain Your Personal Data only as long as necessary for the purposes outlined in this Privacy Policy:
          </TextBody>
          <ItemList items={retentionPersonalDataList}/>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Transfer of Your Personal Data</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            Your data, including Personal Data, is processed at Our operating offices in Indonesia and may be transferred to other locations where Our Service Providers or hardware providers operate. These locations may have different data protection laws than Your jurisdiction. By submitting Your data, You consent to this transfer. We ensure adequate safeguards are in place to protect Your data in accordance with this Privacy Policy and applicable laws, including Indonesia’s Personal Data Protection Law (UU PDP).
          </TextBody>
        </SectionContainer>
    
        <Divider/>

        <SectionSubHeading>Your Rights</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            Depending on Your location and applicable laws, You may have the following rights regarding Your Personal Data:
          </TextBody>
          <ItemList items={rightsDataList}/>
          <TextBody>
            To exercise these rights, contact Us at cs@assetfindr.com. We will respond in accordance with applicable laws.
          </TextBody>

          <Subheading2>Delete Your Personal Data</Subheading2>
          <TextBody>
            You may delete or request the removal of Your Personal Data, including specific inspection records, at any time by:
          </TextBody>
          <ItemList items={deletePersonalDataList}/>
          <TextBody>
            We may retain certain data if required by law or for legitimate business purposes (e.g., dispute resolution).
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Disclosure of Your Personal Data</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            We may disclose Your data if:
          </TextBody>
          <ItemList items={disclosurePersonalDataList}/>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Security of Your Personal Data</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            We use industry-standard encryption and security measures to protect Your data, including information transmitted from Our hardware to Our servers. However, no method of transmission or storage is 100% secure, and We cannot guarantee absolute security.
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Links to Other Websites</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            The Service may link to third-party websites not operated by Us. We are not responsible for their privacy practices and recommend reviewing their policies.
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Children’s Privacy</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            Our Service is not intended for individuals under 13. We do not knowingly collect Personal Data from children under 13. If You believe We have such data, please contact Us.
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Cookies and Identifiers</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            We may use Cookies and Device Identifiers to enhance the Service, such as improving navigation, analyzing usage, or personalizing content. Types of Cookies include:
          </TextBody>
          <ItemList items={cookiesAndIdentifierDataListV2}/>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Compliance with Applicable Laws</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            We comply with Indonesia’s Personal Data Protection Law (UU PDP) and other applicable regulations. If You are in a region with additional requirements (e.g., GDPR in the EU), Your rights and Our obligations may vary. Contact Us for region-specific details.
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Changes to This Privacy Policy</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            We may update this Privacy Policy as needed. Changes will be posted here, and We will notify You via email or a notice in the Service before they take effect. Please review this page periodically.
          </TextBody>
        </SectionContainer>

        <Divider/>

        <SectionSubHeading>Contact Us</SectionSubHeading>
        <SectionContainer>
          <TextBody>
            For questions about this Privacy Policy or to exercise Your rights, contact Us:
          </TextBody>
          <ItemList items={contactUslDataList}/>
        </SectionContainer>
      </MainContainer>
      <div>
        <Footer handleClickButton={handleClickButton}/>
      </div>
    </AnimationRevealPage>
  );
};
