import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Typography, useScrollToTop } from "@chainsafe/common-components"
import clsx from "clsx"
import { Trans } from "@lingui/macro"
import NavBar from "../Modules/NavBar"

const useStyles = makeStyles(
  ({ palette, constants, breakpoints, typography }: ITheme) =>
    createStyles({
      container: {
        maxWidth: breakpoints.width("md"),
        margin: "0 auto",
        color: palette.additional["gray"][9],
        padding: `${constants.generalUnit * 16}px ${constants.generalUnit * 4
          }px ${constants.generalUnit * 20}px`,
      },
      heading: {
        ...typography.h1,
        fontFamily: "'Neue Montreal, Arial', sans-serif",
        letterSpacing: "-4px",
      },
      title: {
        ...typography.h4,
        paddingTop: constants.generalUnit * 3,
        fontFamily: "'Neue Montreal, Arial', sans-serif",
        fontWeight: 600,
        letterSpacing: "-1px",
      },
      text: {
        ...typography.body1,
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "'Neue Montreal, Arial', sans-serif",
        letterSpacing: "-.25px",
      },
      caption: {
        ...typography.body1,
        fontFamily: "'Neue Montreal, Arial', sans-serif",
      },
      padLarge: {
        padding: `${constants.generalUnit * 3}px 0 ${constants.generalUnit * 1
          }px 0`,
      },
      padSmall: {
        padding: `${constants.generalUnit * 1}px 0`,
      },
      orderedList: {
        ...typography.body1,
        padding: "revert",
        listStyle: "decimal",
        fontFamily: "'Neue Montreal, Arial', sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
      },
      letteredList: {
        ...typography.body1,
        padding: "revert",
        listStyle: "lower-alpha",
        fontFamily: "'Neue Montreal, Arial', sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
        "& > li": {
          marginTop: constants.generalUnit,
        }
      },
      emailLink: {
        ...typography.body1,
        color: palette.additional["gray"][9],
        fontSize: "16px",
        lineHeight: "24px",
        transition: "all 0.3s",
        "&:hover": {
          color: palette.primary.main,
        }
      },
    }),
)

const TermsOfServicePage: React.FC = () => {
  const classes = useStyles()
  useScrollToTop(true);

  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <Typography
          component="h1"
          className={clsx(classes.heading, classes.padLarge)}
        >
          <Trans>Terms of Service</Trans>
        </Typography>

        <Typography
          component="p"
          className={clsx(classes.caption, classes.padSmall)}
        >
          <Trans>Last Modified: July 15 2021</Trans>
        </Typography>
        <Typography
          component="p"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            Hello! These Terms of Service (these <strong>“Terms”</strong> or this <strong>“Agreement”</strong>) govern your access to and use of ChainSafe Files (the <strong>“Service”</strong>, located at https://files.chainsafe.io), made available by ChainSafe Systems Inc. (<strong>“we”</strong>, <strong>“us”</strong>, and <strong>“ChainSafe”</strong>, together with <strong>“you”</strong> and similar meaning terms, the “Parties”, and each, a <strong>“Party”</strong>).
          </Trans>
        </Typography>
        <Typography
          component="p"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            By submitting an Order Form (as defined below), accessing, logging-into or using the Service, you acknowledge that you have read and understand these Terms. You agree to be bound by these Terms and all terms policies and guidelines incorporated by reference herein. If you do not agree with these Terms, you may not access or use the Service.
          </Trans>
        </Typography>

        <Typography
          component="h2"
          variant="h2"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>1. CHANGES TO THESE TERMS OF SERVICE AND POLICIES </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            ChainSafe reserves the right, in its sole discretion, to change, modify, replace, add or suspend portions of these Terms, our privacy policy and any other relevant policies at any time by posting amended terms on the Service or emailing you at the address provided when registering for a User Account (as defined below). If you continue to access the Service after the amended terms are posted, you will be deemed to have accepted such terms through your continued use of the Service. If at any point you do not agree with our Terms or any other policy we may have at such time, your license to use the Service shall immediately terminate and you must stop using the Service.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>2. THE SERVICE</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>2.1. The Service.</strong> ChainSafe Files is a privacy-focused file storage platform that leverages distributed cloud systems to offer a reliable and secure way to store and access files.

          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>3. ELIGIBILITY</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>3.1. Eligibility.</strong> You may register for a user account (<strong>“User Account”</strong>) if you are an individual that is at or above the age of majority in your country of residence and can form a legally binding agreement under applicable law. You shall not access the Service if you previously had a User Account that was deactivated or suspended. ChainSafe reserves the right to change the eligibility requirements for the Service.

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            You must be at least thirteen (13) years of age to access or use the Service. If you are below the age of majority in your country of residence, your parent or legal guardian must register for a User Account on your behalf and consent to your access to and use of the Service.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>4. PRIVACY POLICY</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>4.1. Privacy Policy. “Personal Information”</strong>  means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular individual or household. By accessing the Service and submitting your Personal Information, you consent to the collection, use, transmission and disclosure of your Personal Information in accordance with our privacy policy (<strong>“Privacy Policy”</strong>), found <a
              className={clsx(classes.emailLink)}
              href="/privacy-policy"
            >here.</a>
          </Trans>
        </Typography>

        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>5. ACCOUNT </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>5.1. User Accounts</strong> You will be required to register for a User Account in order to access and use the Service. Upon accessing the Service, you may be required to submit an order form specifying which features on the Service you wish to access (the <strong>"Order Form"</strong>).  When registering for a User Account, you agree to provide accurate, full and complete information as prompted. You shall not include the name or contact information of another person with the intent to impersonate that person.

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>5.2. Protection of Login Information.</strong> Your User Account username and password are personal to you. It is your responsibility to maintain your password's confidentiality and not to share, transfer or sell access to your User Account. ChainSafe will not be liable for any harm, losses or damages related to (i) your disclosure of your username, 24 word pass phrase or password; or (ii) the Service's use by anyone else through your User Account. We may require you to change your username or password, in our sole discretion, if we believe your User Account is no longer secure or if we have received a complaint. You are responsible for all actions and conduct performed through your User Account
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>5.3. Social Media Registration.</strong> If you register for a User Account on the Service through a social media account or any Third-Party Services (as defined below), you acknowledge and agree that ChainSafe may access, store and use content from the social media account or Third-Party Services in accordance with the permissions granted to us.
          </Trans>
        </Typography>

        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>6. FEES</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>6.1. Fees </strong>There may be fees payable for the provision of the Service (<strong>“Fees”</strong>), which may be based on access to or usage of the Service. Any Fees payable shall be described to you in advance by ChainSafe through the Service or on an Order Form (if applicable). Fees to access and use the Service may change from time to time and shall be determined by ChainSafe, in its sole discretion.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
              By submitting an Order Form, you agree to pay the applicable Fees relevant to your products or services purchased through the Service. Unless otherwise specified, Fee payment obligations are non-cancelable and non-refundable.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>6.2. Payment Processing. </strong>ChainSafe may rely on third-party service providers to facilitate the payment of Fees for the Service. You authorize ChainSafe to use any relevant information provided when registering for a User Account to facilitate any payment of Fees.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>6.3. Taxes. </strong>You are responsible for all applicable federal, state, provincial, municipal, sales, goods and services, harmonized sales, value-added, use, excise, other similar taxes, levies and charges not otherwise included in the Fees imposed by applicable tax authorities on the provision of Service. Those amounts are in addition to the Fees charged to access and use the Service. You shall pay to ChainSafe such amounts that ChainSafe is registered to charge and collect.

          </Trans>
        </Typography>
        
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>7. USER CONTENT </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>7.1. User Content</strong> When you submit, upload, post, share or otherwise transfer content, information or data (<strong>“User Content”</strong>) on or through the Service, you grant to us, our affiliates and service providers, and each of their and our respective licensees, successors, and assigns a worldwide, royalty-free, sub-licensable and non-exclusive license to use, reproduce, modify, perform, display and transfer any such User Content for the purposes of operating and providing the Service. To clarify, this license to your User Content allows us to transfer and store your User Content through any medium or technology throughout the world and without compensation to you solely for the purpose of running the Service. However, it does not allow us to access any of your User Content unless you provide us with the applicable encryption key.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>7.2. Ownership of User Content. </strong>User Content is the property of the user that submits it. By submitting User Content, you represent and warrant that you own or have the necessary rights to submit the User Content and that you have the right to grant the User Content license found in Section ‎7.1 to us and our affiliates and third-party service providers, and each of their and our respective licensees, successors, and assigns. You also represent and warrant that all User Content provided to the Service complies with any privacy rights, publicity rights, the intellectual property rights of any third-party, and any applicable laws.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>7.3. Responsibility for User Content. </strong>You understand and agree that you, and not ChainSafe nor ChainSafe’s subsidiaries, affiliates, directors, officers, employees, agents, service providers, contractors, licensors, suppliers or successors, are responsible for any User Content you submit or contribute and that you are entirely liable, including to any third-party for such User Content and its accuracy. ChainSafe is not responsible or legally liable to any third-party for the content or accuracy of any User Content submitted by you or any other User Account on the Service. ChainSafe is not responsible for any User Content that you may access or obtain through the Service.
          </Trans>
        </Typography>

        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>8. INTELLECTUAL PROPERTY OWNERSHIP AND LICENSING </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>8.1. Intellectual Property Ownership. </strong>You acknowledge and agree that the Service and its entire contents, features, and functionality, including, but not limited to, all information, software, code, text, displays, graphics, photographs, video, audio, design, presentation, selection, and arrangement, are owned by ChainSafe, our licensors, or other providers of such material and are protected in all forms by intellectual property rights including, without limitation: copyright, trademark, patent, trade secret, and any other proprietary rights. Except for the rights and licenses granted in this Agreement, ChainSafe and its licensors shall retain all rights, title, interests, copyright, patent rights, trade secret rights, trademarks and other proprietary rights or interests (<strong>“Intellectual Property Rights”</strong>) in the Service. Nothing in this Agreement or any Order Form shall be deemed to transfer or convey ownership of any Intellectual Property Rights from one Party to the other.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            Any use of the Service not expressly permitted by these terms is a breach of these Terms and may infringe or violate ChainSafe’s Intellectual Property Rights. The ChainSafe name, ChainSafe logo and all related names, logos, product and service names, designs, images, and slogans are trademarks of ChainSafe or its affiliates or licensors. You must not use such marks without our prior written consent.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>8.2. License to the Service. </strong>Subject to these Terms, and the Order Form (if applicable), ChainSafe hereby grants to you a non-exclusive, non-transferable, revocable license to access and use the Service and the functionality contained, in accordance with these Terms.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>8.3. Restrictions.  </strong>Except as set forth in these Terms and to the extent contrary to applicable law, the license granted to you in Section ‎8.2 is subject to the following restrictions. You may not:
          </Trans>
        </Typography>
        <ol className={clsx(classes.letteredList, classes.padLarge)}>
          <li>
            <Trans>
              post or communicate any information or User Content via the Service that is defamatory, libellous, hateful, violent, obscene, pornographic, unlawful, or otherwise offensive, as determined by us, in our sole discretion, whether or not such information may be protected by applicable law;
            </Trans>
          </li>
          <li>
            <Trans>
              copy, distribute, modify, create derivative works or adapt the Service, except as permitted under these Terms;
            </Trans>
          </li>
          <li>
            <Trans>
              use the Service in a manner that violates any applicable law or breaches the rights of any third-party;
            </Trans>
          </li>
          <li>
            <Trans>
              reverse engineer, disassemble, decompile or decode the Service or otherwise attempt to derive or gain access to the source code of the Service, in whole or in part;
            </Trans>
          </li>
          <li>
            <Trans>
              rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer or otherwise make available the Service to any person, including on or in connection with the internet or any subscription service, time-sharing, software as a service, cloud or other technology or service;
            </Trans>
          </li>
          <li>
            <Trans>
              bypass or breach any security device, mechanism or protection used for or contained in the Service;
            </Trans>
          </li>
          <li>
            <Trans>
              replicate or recreate any part, design, function, feature or tool on the Service;
            </Trans>
          </li>
          <li>
            <Trans>
              use, or access the Service to build a competitive product or service or for any other competitive purposes;
            </Trans>
          </li>
          <li>
            <Trans>
              use the Service other than for its permitted and intended uses, or in any manner not expressly permitted by our third-party licensors.
            </Trans>
          </li>
          <li>
            <Trans>
              submit via the Service any data, software or other materials that contain any malicious code, viruses, worms, Trojan horses, defects, date bombs, time bombs or other items of a destructive nature;
            </Trans>
          </li>
          <li>
            <Trans>
              take any actions that impose an unreasonable burden on the Service’s technological infrastructure;
            </Trans>
          </li>
          <li>
            <Trans>
              submit inaccurate, false, or misleading information to the Service;

            </Trans>
          </li>
          <li>
            <Trans>
              distribute, publish, send or facilitate the sending of unsolicited mass email or other messages, promotions, advertising or solicitations, including commercial advertising and informational announcements;
            </Trans>
          </li>
          <li>
            <Trans>
              remove any legal, copyright, trademark or other proprietary rights notices contained in the Service or on materials you receive or access pursuant to these Terms; or
            </Trans>
          </li>
          <li>
            <Trans>
              attempt to gain unauthorized access to the Service, the servers on which the Service is stored, or any server, computer or database connected to the Service.
            </Trans>
          </li>
        </ol>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>9. THIRD-PARTY SOFTWARE AND OPEN-SOURCE LICENSES </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>9.1. Third-Party Software and Open-Source Licenses. </strong>The Service contains third-party software that may be subject to their own licenses. These licenses may be open-source and contain additional terms and conditions. You understand and acknowledge that any third-party software accessed through the Service is not licensed to you pursuant to the provisions of these Terms and that these Terms may not be construed to grant any such right or license to you. The licenses that govern any third-party software are incorporated into these Terms. By accepting these Terms and accessing and using the Service, you also accept any third-party software licenses. To access any third-party licenses, please contact us at <a href="mailto:support@chainsafe.io" className={classes.emailLink}>support@chainsafe.io</a>
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>9.2. Decentralized Protocol Integration. </strong>The Service is integrated with a decentralized protocol that it relies upon to transfer User Content, data and information. We cannot guarantee that there will be no interruptions between the Service and the decentralized protocol, nor that there will be continued interoperability between the Service and the decentralized protocol on an ongoing basis. ChainSafe disclaims any and all liability to you for any harm that may arise from incorrect or inaccessible User Content, information or data on the Service.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>10. SHARING FILES THROUGH THE SERVICE</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>10.1. Sharing Tools. </strong>The Service may contain sharing features and tools that allow you to share and transfer files with other Users or to third-parties outside of the Service (<strong>“Sharing Tools”</strong>).

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            ChainSafe is not obligated to monitor or review any User Content transferred or transmitted through any of the Sharing Tools on the Service and does not endorse any User Content that is transferred or transmitted through the Sharing Tools. ChainSafe reserves the right, in its sole discretion, to remove any User content that is flagged, without notice or liability to you. If you post any User Content to the Service in violation of these Terms, our Privacy Policy or any relevant policies, we may terminate, deactivate or suspend your User Account or suspend your access to any of the Sharing Tools. You are responsible for your use of the Sharing Tools and the User Content you transfer or transmit through them. Under no circumstances will ChainSafe be liable for any activity through the Sharing Tools by you or another User. While ChainSafe strives to make the Service as secure as possible, we cannot ensure the privacy of User Content that is shared with a third-party. For this reason, if you use the Sharing Tools to share User Content, you acknowledge and agree to waive any expectation of privacy over the User Content that is transferred or transmitted.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>11. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>11.1. DISCLAIMER OF WARRANTIES. </strong>THE SERVICE, ITS CONTENTS, AND ANY FEATURES OR INFORMATION FOUND THROUGH THE SERVICE ARE PROVIDED ON AN “AS IS” BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. YOU ACKNOWLEDGE AND AGREE THAT YOUR ACCESS TO AND USE OF THE SERVICE AND ITS CONTENTS IS DONE SO AT YOUR OWN RISK. ANY RISKS RESULTING FROM THE ACCESS AND USE OF THE SERVICE REMAINS SOLELY WITH YOU.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            NEITHER CHAINSAFE NOR ITS SUBSIDIARIES, AFFILIATES, OR THEIR RESPECTIVE AGENTS OR REPRESENTATIVES MAKE ANY WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY, OR AVAILABILITY OF THE SERVICE OR ITS CONTENTS. CHAINSAFE DOES NOT GUARANTEE THE QUALITY, ABILITY, SUITABILITY OR AVAILABILITY OF ANY THIRD-PARTY SERVICE PROVIDERS ACCESSIBLE THROUGH THE SERVICE. WITHOUT LIMITING THE FOREGOING, NEITHER CHAINSAFE NOR ITS SUBSIDIARIES, AFFILIATES OR THEIR AGENTS REPRESENT NOR WARRANT THAT THE SERVICE, ITS CONTENTS, OR ANY FEATURES OR INFORMATION FOUND THROUGH THE SERVICE WILL BE ACCURATE, RELIABLE, ERROR-FREE, WITHOUT DELAY, WITHOUT LOSS OF DATA OR INFORMATION, WITHOUT DEGRADATION OF FILE QUALITY, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR TECHNOLOGICAL INFRASTRUCTURE THAT MAKES THE SERVICE AVAILABLE TO YOU IS FREE OF VIRUSES, MALICIOUS CODE OR OTHER TECHNOLOGICALLY HARMFUL COMPONENTS.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>11.2 Limitation of Liability. </strong>Except where such exclusions are prohibited by applicable law, under no circumstance will ChainSafe nor its subsidiaries, affiliates or their respective directors, officers, employees, agents, service providers, contractors, licensors, licensees, suppliers, or successors be liable for negligence, gross negligence, negligent misrepresentation, fundamental breach, damages of any kind, under any legal theory, including any direct, indirect, special, incidental, consequential, or punitive damages relating to your use of the Service. This includes any of the foregoing resulting from, but not being limited to, intellectual property infringement, violation of privacy rights, inaccuracy of the content provided by the Service, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort, breach of contract, breach of privacy, or otherwise, even if you were allegedly advised or had reason to know. ChainSafe will also not be liable for any damages arising out of or in connection with your use, inability to use, or reliance on the Service, its content, or any information thereon even if you were allegedly advised or had reason to know.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            In no event shall the aggregate liability of ChainSafe, whether in contract, warranty, tort, product liability, or any other legal theory, arising out of or relating to the access or use of the Service exceed any amount paid by you during the three (3)months before the date of any claim.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>12. INDEMNIFICATION</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>12.1. Indemnity by User. </strong>You agree to defend, indemnify and hold ChainSafe, its directors, officers, employees, agents, contractors and affiliates, harmless from any claims losses, damages or liability for personal injury, death, fines, penalties, costs, expenses, lost profit, lost revenue, property damage, legal fees, and any and all other damages of whatever kind and nature relating to, resulting from, or arising out of (i) your use of, or inability to use the Service; (ii) the use of Service by any individual using your User Account (ii) any User Content inputted or uploaded to the Service or transmitted through the Sharing Tools through your account; (iii) allegations that your User Content infringe on a third-party’s rights (including Intellectual Property Rights); (v) any dispute that you have with another User that may arise from the use of the Sharing Tools; and (vi) a breach of this Agreement by you, including any obligation to comply with applicable law.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>13. SECURITY OF THE SERVICE</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>13.1. Security. </strong>ChainSafe implements appropriate administrative, physical and technical security technologies designed to provide a secure environment and protect the security and confidentiality of Personal Information and User Content against any accidental or unauthorized destruction, alteration, access or disclosure. For example, all User Content on the Service is encrypted using modern end-to-end cryptographic technologies to ensure their security. Although measures are taken to protect your Personal Information and User Content, the security of any data or information transmitted via the Service cannot be guaranteed. There are many vulnerabilities that may result from the use of the internet, your equipment, and decentralized technologies that prevent us from guaranteeing the security of your User Content. Any transmission of your User Content or Personal Information via the Service is done so at your own risk.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>14. TERM, TERMINATION AND MODIFICATION OF SERVICE</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>14.1. Term. </strong>The term of this Agreement (<strong>“Term”</strong>) shall commence on the date these terms are accepted (<strong>“Effective Date”</strong>) by you, or on the date an Order Form is submitted and shall continue until either Party terminates the Agreement in accordance with this Section ‎14.

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>14.2. Termination and Suspension of Users. </strong>Notwithstanding any provision of these Terms, ChainSafe reserves the right, in its sole discretion, without any notice or liability to you, to (a) terminate your license to use the Service, or any portion thereof; (b) block or prevent your future access to and use of any or all parts of the Service; (c) change, suspend, or discontinue any aspect of the Service; and (d) impose limits on your use of the Service.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>14.3. Termination by User. </strong>You may terminate this Agreement at any time but may no longer access or use the Service after doing so. Any User Content shared or uploaded to the Service may be retained or destroyed in accordance with our Privacy Policy. You grant us a license to retain your User Content upon the termination of your User Account in order to comply with applicable law.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>14.4. Modifications to the Service. </strong>ChainSafe strives to continually improve the Service’s offerings. In improving the Service, we may change, modify, replace, add or remove features, content and functionalities. If we make changes to the Service that materially impact your use of the Service, we will email you if an address is provided or post a notice on the Service or your User Account.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            ChainSafe may (a) change, suspend or discontinue any aspect of the Service; or (b) terminate your access or licence to any or all parts of the Service at any time, with or without cause, with or without notice, effective immediately, which may result in the destruction of your User Content. ChainSafe may also impose limits on certain features and offerings or restrict your access to parts of the Service without notice or liability to you. Your continued use of the Service following notification of any changes to these Terms constitutes acceptance of those changes.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>14.5. Effect of Termination. </strong>Upon termination of this Agreement in accordance with this Section ‎14, you will have no further right to access or use the Service. You acknowledge that you are responsible for exporting any User Content you wish to access upon this Agreement terminating, and ChainSafe shall have no liability to you for your inability to retrieve such User Content. Following the termination of the Term, ChainSafe may immediately deactivate your User Account.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>15. GENERAL</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.1. Governing Law. </strong>This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario and the federals laws of Canada as applicable therein, without giving effect to any choice or conflict of law provision, principle, or rule (whether of the laws of the Province of Ontario or any other jurisdiction) and notwithstanding your domicile, residence, or physical location.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.2. Dispute Resolution. </strong>All controversies or claims (<strong>“Disputes”</strong>) arising out of these Terms shall first be negotiated in good faith by non-lawyer representatives from both parties. All Disputes that are not resolved within thirty (30) days of the initial notice to the other Party shall be submitted to final and binding arbitration, with no right of appeal. The place of the arbitration shall be in the city of Toronto, in the Province of Ontario. The language of the arbitration shall be English. The arbitrator’s award shall be final, and judgment may be entered upon it by any court having jurisdiction thereof.

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.3. Waiver of Jury Trial. </strong>Each Party acknowledges and agrees that any Disputes that may arise under this Agreement is likely to involve complicated and difficult issues and, therefore, each such Party irrevocably and unconditionally waives any right it may have to a trial by jury in respect of any legal action arising out of or relating to this Agreement or the transactions contemplated hereby. Each Party to this Agreement acknowledges that (a) no representative of any other Party has represented, expressly or otherwise, that such other Party would not seek to enforce the foregoing waiver in the event of any legal action; (b) such Party has considered and understood the implications of this waiver; (c) such Party makes this waiver knowingly and voluntarily; and (d) such Party has been induced to enter into this Agreement by, among other things, the mutual waivers and acknowledgments in this Section.

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.4. Waiver of Class Proceedings. </strong>You waive any right you may have to commence or participate in any class action against related to any Disputes and, where applicable, you also agree to opt-out of any class proceedings and expressly waive any rights to file a class action or seek relief on a class basis against ChainSafe or its affiliates. You also waive any and all objections to the exercise of jurisdiction over you by such courts and to the venue of such courts.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            Any action or proceeding arising out of or relating to the Service and under these Terms shall be pursued through arbitration based on the procedure describe in Section ‎15.2. If arbitration is prohibited under applicable law, then any action or claim shall be instituted in the courts of the Province of Ontario or the Federal Courts of Canada, and each Party irrevocably submits to the exclusive jurisdiction of such courts in any such action or proceeding.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.5. Survival. </strong>The provisions of this Agreement relating to indemnification, limitations on liability, and which by their nature extend beyond the termination of this Agreement shall survive such termination. This includes, without limitation, Section ‎6 (Fees), Section ‎7 (User Content), Section ‎8 (Intellectual Property), Section ‎11 (Disclaimer,  Limitation of Liability), Section ‎12 (Indemnification), Section ‎14 (Termination), and relevant provisions of this Section ‎15 (General).
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.6. Independent Contractors. </strong>Nothing in this Agreement will be construed to imply a joint venture, partnership or principal-agent relationship between you and ChainSafe, and neither Party will have the right, power or authority to obligate or bind the other in any manner whatsoever.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.7. Force Majeure. </strong>Neither Party will be liable to the other Party for any delay or failure to perform (except for any payment obligation) which is due to acts of God, acts of government, war, civil or military unrest, pandemic, virus, epidemic, riots, terrorism, fire, unavailability of communications or electrical power service provided by third-parties, travel advisories as to health, security, flood, lockout, transportation delay, strikes or other labour difficulties, or other causes beyond the Party’s reasonable control. However, in such an event, both Parties will resume performance promptly after the cause of such delay or failure has been removed.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.8. Currency. </strong>Unless otherwise specified, all references to amounts of money in this Agreement refer to the United States of America (USD) currency.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.9. Notices. </strong>Notices that ChainSafe sends to you (other than notice of amendment of this Agreement) may be provided in any of the following ways. First, ChainSafe may email you at the contact information provided when registering for your User Account or at the contact information provided in the Order Form. Second, ChainSafe may post the notice on the Service. It is your responsibility to review the Service for notices periodically. You may provide notice to ChainSafe by submitting a notice through the Service or through emailing ChainSafe at the address below.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.10. Successors and Assigns. </strong>This Agreement shall enure to the benefit of and be binding on the parties and their respective successors and permitted assigns. Chainsafe may assign all or part of its rights or duties under this Agreement. You may not assign this Agreement or its rights or obligations hereunder without ChainSafe’s prior written consent.
          </Trans>
        </Typography>
        
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.11. Severability and Waiver. </strong>This Agreement shall be deemed severable, and the invalidity or unenforceability of any term or provision and shall not affect the validity or enforceability of this Agreement or of any other term or provision in this Agreement. Should any term or provision of this Agreement be declared void or unenforceable by any court of competent jurisdiction, the Parties intend that a substitute provision will be added to this Agreement so that, to the greatest extent possible, the substitute provision achieves the intended commercial outcome of the original provision. Any failure of either Party to enforce any rights granted to it hereunder or to take action against the other Party in the event of any breach hereunder will not be deemed a waiver by that Party as to subsequent enforcement of rights or subsequent actions in the event of future breaches.
          </Trans>
        </Typography>
        
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.12. Entire Agreement. </strong>This Agreement and any Order Form supersedes all prior agreements, negotiations and representations between the Parties regarding the subject matter of this Agreement.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.13. Export Controls. </strong>The Service and all related software and technical information may be subject to the United States of America’s export laws, restrictions and regulations. You agree not to export, transfer, distribute, transmit or allow for the export, transfer, distribution or transmission of the Service and all related content, software and technical information, except in compliance with any and all relevant export laws, regulations and restrictions. The export, transfer, distribution or transmission of the Service and all related content, software and technical information, directly or indirectly to an embargoed or sanctioned region/country, is in violation of these Terms.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>15.14. Geographic Restrictions. </strong>ChainSafe does not provide the Service to certain countries outside of the United States of America and Canada. If you use the Service in a country not supported by us and in violation of applicable law, you are solely liable for any violations and agree to indemnify us for any claims, damages or losses.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>15. QUESTIONS</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>16.1.</strong>If you have any questions regarding these Terms or your use of the Service, please contact us here: <a href="mailto:support@chainsafe.io" className={classes.emailLink}>support@chainsafe.io</a>
          </Trans>
        </Typography>
       
      </div>
    </div>
  )
}

export default TermsOfServicePage
