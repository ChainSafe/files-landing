import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Typography, useScrollToTop } from "@chainsafe/common-components"
import clsx from "clsx"
import { Trans } from "@lingui/macro"
import NavBar from "../Modules/NavBar"
import { usePageTrack } from "../Contexts/PosthogContext"

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
        ...typography.h2,
      },
      title: {
        ...typography.h3,
        paddingTop: constants.generalUnit * 3,
      },
      text: {
        ...typography.body1,
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "left",
      },
      semibold: {
        fontWeight: 600,
      },
      caption: {
        ...typography.body1,
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
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
      },
      romanOrderedList: {
        ...typography.body1,
        padding: "revert",
        listStyle: "lower-roman",
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
      },
      lowercaseOrderedList: {
        ...typography.body1,
        padding: "revert",
        listStyle: "lower-alpha",
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
      },
      unorderedList: {
        ...typography.body1,
        padding: "revert",
        listStyle: "disc",
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
      },
      subUnorderedList: {
        ...typography.body1,
        padding: "revert",
        listStyle: "circle",
        fontSize: "16px",
        lineHeight: "24px",
        margin: `${constants.generalUnit * 2}px 0`,
      },
      hoverLink: {
        ...typography.body1,
        fontSize: "16px",
        lineHeight: "24px",
        color: palette.additional["geekblue"][7],
        cursor: "pointer",
        transition: "0.3s ease-in",
        "&:hover":{
         color: palette.additional["geekblue"][5],
        }
      },
      tableContainer: {
        background: palette.additional["gray"][4],
        padding: constants.generalUnit * 2,
        borderRadius: constants.generalUnit,
      },
      tableBody: {
        paddingBottom: constants.generalUnit * 2,
        borderBottom: "1px solid #a8a8a8",
      }
    }),
)

const EEAPolicyPage: React.FC = () => {
  const classes = useStyles()
  useScrollToTop(true);
  usePageTrack()
  return (
    <div style={{ background: "#fafafa" }}>
      <NavBar />
      <div className={classes.container}>
        <Typography
          component="h1"
          className={clsx(classes.heading, classes.padLarge)}
        >
          <Trans>Additional Terms for Residents of the European Economic Area (EEA) and the United Kingdom</Trans>
        </Typography>
       {/* Controller */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Controller</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            ChainSafe Systems Inc. is the controller and responsible for your personal data (collectively referred to as “<strong>ChainSafe</strong>”, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>our</strong>” in this privacy policy).
            We have appointed a data protection officer (“<strong>DPO</strong>”) responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the DPO using the details set out below.
          </Trans>
        </Typography>
       {/* Contact Details */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Contact Details</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            If you have any questions about this privacy policy or our privacy practices, please contact our DPO:
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            Priom Chowdhury
            251 Spadina Avenue, Unit 204, M5T 2E2
            Toronto, Ontario Canada
            support@chainsafe.io
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            You have the right to make a complaint at any time, but we would appreciate the chance to deal with your concerns before any complaint is made, so please contact us in the first instance. 
          </Trans>
        </Typography>
        {/* Changes to the Privacy Policy */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Changes to the Privacy Policy</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We keep our privacy policy under regular review. This version was last updated on the date listed above. It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
          </Trans>
        </Typography>
        {/*Third-Party Links */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Third-Party Links</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           The Service may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave the Service, we encourage you to read the privacy policy of every website you visit.
          </Trans>
        </Typography>
        {/*The Data We Collect About You */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>The Data We Collect About You</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           In this section, personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). 
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           We may collect, use, store and transfer different kinds of personal data about you, which we have grouped together as follows: 
          </Trans>
        </Typography>
        <ul className={clsx(classes.unorderedList, classes.padSmall)}>
          <li>
            <Trans>
              <strong>Identity Data</strong> includes first name, last name.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Contact Data</strong> includes billing address, email address and telephone numbers.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Financial Data</strong> includes bank account and payment card details.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Technical Data</strong>  includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access the Service.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your preferences, feedback and survey responses.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Usage Data</strong> includes information about how you use the Service and products.
            </Trans>
          </li>
        </ul>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We may also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific Service feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data, which will be used in accordance with this Privacy Policy.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
          </Trans>
        </Typography>
          {/*Failure to Provide Personal Data  */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Failure to Provide Personal Data </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us, but we will notify you if this is the case at the time. 
          </Trans>
        </Typography>
        {/* How is Your Personal Data Collected?  */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Failure to Provide Personal Data </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We use different methods to collect data from and about you including through:
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>Direction interactions.</strong> You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, email or otherwise. This includes personal data you provide when you:
          </Trans>
        </Typography>
        <ul className={clsx(classes.unorderedList, classes.padSmall)}>
          <li>
            <Trans>
              Apply for products through the Service;
            </Trans>
          </li>
          <li>
            <Trans>
              Create an account on the Service; or
            </Trans>
          </li>
          <li>
            <Trans>
             Give us feedback or contact us.
            </Trans>
          </li>
        </ul>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>Automated technologies or interactions.</strong> As you interact with the Service, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies. The cookies that we use are self-hosted and allow us to view and remember your actions on the site. This is done for analytics purposes. You may: (i) set your browser to decline certain kinds of cookies; (ii) decline for the use of the Service’s cookies; (iii) delete the Service’s cookies at any time.
          </Trans>
        </Typography>
        {/* How We Use Your Personal Data*/}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>How We Use Your Personal Data</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </Trans>
        </Typography>
        <ul className={clsx(classes.unorderedList, classes.padSmall)}>
          <li>
            <Trans>
              Where we need to perform the contract we are about to enter into or have entered into with you.
            </Trans>
          </li>
          <li>
            <Trans>
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
            </Trans>
          </li>
          <li>
            <Trans>
              Where we need to comply with a legal obligation.
            </Trans>
          </li>
        </ul>
        {/* Purposes for Which We Will Use Your Data */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Purposes for Which We Will Use Your Data</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the following table:
          </Trans>
        </Typography>
        <br/>
        <div className={classes.tableContainer}>
          <table>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                {"  "}To register you as a new customer:
                <ol>
                  <li>(a) Create an account</li>
                  <li>(b) Provide the Service</li>
                  <li>(c) Communicate with you</li>
                  <li>(d) Respond to your requests and provide support</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                <ol>
                  <li><strong>Identity Data</strong> – first name, last name</li>
                  <li><strong>Contact Data</strong> – email, phone number, address</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                 Performing our contractual responsibilities with you
              </td>
            </tr>
          </tbody>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                {"  "}To process and deliver your order, including:
                <ol>
                  <li>(a) Manage payments, fees and charges</li>
                  <li>(b) Collect and recover money owed to us </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
  
                <ol>
                  <li><strong>Contact Data</strong> – billing name and address, email address</li>
                  <li><strong>Financial Data</strong> – ebank account, crypto wallet or payment card details</li>
                  <li><strong>Transaction Data</strong> – includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                  <li><strong>Profile Data</strong> –  purchases and orders previously made</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                Performing our contractual responsibilities with you and recovering debts owed to us (if applicable)
              </td>
            </tr>
          </tbody>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                To integrate the use of third-party services into the Services
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
  
                <ol>
                  <li><strong>Technical Data</strong> – login data (social media, single-sign-on services and other sign-in tokens), IP address, plug-ins</li>
                  <li><strong>Profile Data</strong> – username and password for third-party services</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                Providing you with the ability to access the Service through third party offerings
              </td>
            </tr>
          </tbody>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                To manage our relationship with you, which includes:
                <ol>
                  <li>(a) Notifying you about changes to our terms or privacy policy</li>
                  <li>(b) Asking you to leave a review or take a survey</li>
                  <li>(c) Protect us from legal claims and enforce our legal rights</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
  
                <ol>
                  <li><strong>Identity Data</strong> – first name, last name, user name</li>
                  <li><strong>Contact Data</strong> – email address</li>
                  <li><strong>Profile Data</strong> – username, preferences, feedback and survey responses</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                <ol>
                  <li>(a) Performing our contractual responsibilities with you </li>
                  <li>(b) Necessary compliance with our legal obligations </li>
                  <li>(c) Keeping our records up-to-date and studying how customers use the Services </li>
                </ol>
              </td>
            </tr>
          </tbody>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                To administer and protect our business and the Service (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
  
                <ol>
                  <li><strong>Identity Data</strong> – first name, last name</li>
                  <li><strong>Contact Data</strong> – email address, telephone number</li>
                  <li><strong>Profile Data</strong> – username, purchases</li>
                  <li><strong>Usage Data</strong> –  information on how you use the Service</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                <ol>
                  <li>(a) Necessary for running our business, the provision of administration and IT services, network security, to prevent fraud</li>
                  <li>(b)Necessary to comply with our legal obligations</li>
                </ol>
              </td>
            </tr>
          </tbody>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                To use data analytics to improve our Service, customer relationships and experiences
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
  
                <ol>
                  <li><strong>Technical Data</strong> –  IP address, browser type and version, operating system, other technology on the devices you use to access the Service</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                Necessary to define types of customers for the Service, to keep our Service updated and relevant, to develop our business and to inform our product strategy
              </td>
            </tr>
          </tbody>
          <tbody className={classes.tableBody}>
            <tr>
              <td className={clsx(classes.semibold, classes.text)} style={{padding: "1rem 0"}}>
                Purpose/Activity: 
              </td>
              <td className={clsx(classes.padSmall, classes.text)}>
                To make suggestions and recommendations to you about goods or services that may be of interest to you
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Examples of Personal Data that may be collected:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
  
                <ol>
                  <li><strong>Identity Data</strong> –  first name, last name</li>
                  <li><strong>Contact Data</strong> –  email address and telephone number</li>
                  <li><strong>Profile Data</strong> –   username, purchases, preferences, feedback, survey responses</li>
                  <li><strong>Usage Data</strong> –  information about how you use the Service</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className={clsx(classes.semibold, classes.text, classes.padSmall)} style={{paddingRight:"2rem"}}>
                Lawful basis for processing including basis of legitimate interest:   {"  "}
              </td>
              <td className={clsx(classes.text, classes.padSmall)}>
                Necessary for our legitimate interests (to develop our products/services and grow our business)
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Data Transfers</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           Your personal data provided or collected to us may be shared within the group of companies controlled by ChainSafe Systems Inc. This may involve transferring your data outside of the European Economic Area (“<strong>EEA</strong>”). Personal Data and files uploaded to the Service directly are encrypted cryptographically before being transferred and split up across the relied upon decentralized network in a manner that would provide uninterpretable data in the event of a potential hack. However, this uninterpretable data may be transferred to countries that do not have the same data protection regulations as the country you provide your personal data in.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           Our external third parties and the decentralized network the Service relies upon are based outside of the EEA, so their processing of your personal data will involve a transfer of data outside the EEA. When transferring your personal data outside of the EEA, we aim for a similar degree of protection to be afforded to your data by implementing safeguards and security measures. This includes using secure encryption of your personal data as well as certain service providers that provide the same level of protection to personal data that would be applied to in the EEA. Where applicable, we may transfer EEA residents' personal data to partners under a contractual obligation to provide an adequate level of protection to the personal data in accordance with EEA data protection regulations.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Data Retention</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including to satisfy any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           In some circumstances, we will anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Your Rights Regarding Personal Data</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           You have the following rights: 
          </Trans>
        </Typography>
        <ol className={clsx(classes.padSmall, classes.lowercaseOrderedList)}>
          <li className={classes.padSmall}>
            <strong>Right of Access.</strong>  You have the right to request and obtain access to your personal data (known as a “data subject access request”). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
          </li>
          <li className={classes.padSmall}>
            <strong>Right of Rectification.</strong>   You have the right to request the correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, including through providing us with a supplementary statement. However, we may need to verify the accuracy of the new data you provide to us.
          </li>
          <li className={classes.padSmall}>
            <strong>Right of Erasure.</strong>  You have the right to request the erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
          </li>
          <li className={classes.padSmall}>
            <strong>Right to Object to Processing.</strong>  You have the right to object to the processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms. 
          </li>
          <li className={classes.padSmall}>
            <strong>Right to Restriction of Processing. </strong>You have the right to request the restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:
            <ol className={classes.romanOrderedList}>
              <li> If you want us to establish the data’s accuracy.</li>
              <li> Where our use of the data is unlawful, but you do not want us to erase it.</li>
              <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims.</li>
              <li>Where You have objected to our use of your data, but we need to verify whether we have overriding legitimate grounds to use it.</li>
            </ol>
          </li>
          <li className={classes.padSmall}>
            <strong>Right to Portability. </strong> You have the right to request the transfer of your personal data to you or a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information you initially provided consent for us to use or used the information to perform a contract with you.
          </li>
          <li className={classes.padSmall}>
            <strong>Right to Withdraw Consent. </strong> You have the right to withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.
          </li>
        </ol>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Cost of Accessing Your Personal Data</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>What’s Needed From You</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Time Limit to Respond</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made several requests. In this case, we will notify you and keep you updated.
          </Trans>
        </Typography>
      </div>
    </div>
  )
}

export default EEAPolicyPage
