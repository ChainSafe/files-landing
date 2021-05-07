import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Typography } from "@chainsafe/common-components"
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
      emailLink: {
        ...typography.body1,
        color: palette.additional["blue"][6],
        fontSize: "16px",
        lineHeight: "24px",
      },
    }),
)

const TermsOfServicePage: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <Typography
          component="h1"
          className={clsx(classes.heading, classes.padLarge)}
        >
          <Trans>Privacy Policy</Trans>
        </Typography>
        <Typography
          component="p"
          className={clsx(classes.caption, classes.padSmall)}
        >
          <Trans>Last modified: April 28, 2021</Trans>
        </Typography>

        {/* welcome */}
        <Typography
          component="p"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            Welcome! Here at ChainSafe Systems Inc. (“ChainSafe”, “we”, “us” and similar meaning terms) we respect your privacy and are committed to protecting it. This privacy policy (“Privacy Policy”) describes how we collect, use, share and protect the personal information of our users (“you”) on ChainSafe Files (the “Service”, located at https://files.chainsafe.io).
          </Trans>
        </Typography>
        <Typography
          component="p"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We take steps to ensure that the personal information that we collect about you is adequate, relevant, minimal, and used for limited purposes. By accessing the Service, you confirm that you have read and understand our Terms of Service (the “Terms”), found here, and this Privacy Policy. Any capitalized term not defined in this Privacy Policy is incorporated by reference from our Terms.
          </Trans>
        </Typography>
        {/* The gist of it */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>The gist of it</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            As a privacy-first file storage service, we take your privacy rights very seriously. Our services are designed to limit the personal information we collect from you. We will never sell your information to third-parties and will never bother you with advertisements. In keeping privacy top of mind, our goal is to make sure that any information we require from you is necessary for the limited purposes you consent to.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            This Privacy Policy describes the personal information we may collect, the reasons we collect it, how we use it, and how we keep it secure. ChainSafe will not collect, use or disclose your personal information in any way other than in accordance with this policy, unless obligated by applicable law.
          </Trans>
        </Typography>

        {/* Personal Information we directly collect */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Personal information we (directly) collect</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We may need to collect some personal information to provide the Service to you in a secure and safe manner. Our collection and use of your personal information will be limited to that which is necessary to provide you with a tailored experience. 
          </Trans>
        </Typography>
        <ol className={clsx(classes.orderedList, classes.padLarge)}>
          <li>
            <Typography component="p" variant="body1" className={clsx(classes.text, classes.padSmall)}>
              <Trans>
                <strong>Information you may provide to us:</strong> through the course of using the Service, you may be prompted to provide us with your: (i) name; (ii) email address; (iii) password; (iv) authentication information; (v) Web3 wallet; and (vi) payment information.
              </Trans>
            </Typography>
          </li>
        </ol>
      
        {/* Personal Information we (indirectly) collect */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Personal information we (indirectly) collect</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            ChainSafe Files uses automatic data collection technologies to collect personal information that relates to your equipment, browsing actions and usage patterns on the Service. We may utilize and integrate third-party service providers into the Service that use cookies to collect personal information. Any information that is derived through our use of cookies and other data collection technologies is used to provide us with analytics and other Service improvements. Information indirectly collected may include:
          </Trans>
        </Typography>
        <ol className={clsx(classes.orderedList, classes.padLarge)}>
          <li>
            <Typography component="p" variant="body1" className={clsx(classes.text, classes.padSmall)}>
              <Trans>
                <strong>Technical information:</strong> this includes your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, or information about your internet connection (IP address), the equipment you use to access the Service, and usage details. This might also include IDs of errors, communications with the support team or bug reports to improve the Service.
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body1" className={clsx(classes.text, classes.padSmall)}>
              <Trans>
                <strong>Statistical and Aggregated information:</strong> this includes information that we receive across users that does not directly identify a person. Any aggregated information will be anonymized and de-identified if analyzed and used.
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography component="p" variant="body1" className={clsx(classes.text, classes.padSmall)}>
              <Trans>
                <strong>Details of your usage of the Service:</strong> this includes traffic data, logs, other communication data and the resources that you access and use. This may also include the URLs, pages you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, or any phone number used to call us.

              </Trans>
            </Typography>
          </li>
        </ol>

        {/* When/how we collect information */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>When/how we collect information:</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We collect personal information from you when you sign up for a User Account and when you update your User Account’s information. We may collect your personal information from third-party service providers (such as MetaMask, WalletConnect, Github and Google) that integrate with the Service.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>OAuth Authentication:</strong> if you register for a User Account using our OAuth service, your name, email and username from the OAuth service may be collected and stored to identify your User Account. 

          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>Ethereum Authentication:</strong> if you register using an Ethereum address, we will store the Ethereum address to associate it with your User Account. We will store your email address only if you opt-in to providing it. An email address is not required for users accessing the Service with an Ethereum address.
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>We also collect your personal information when you:</Trans>
        </Typography>
        <ul className={clsx(classes.unorderedList, classes.padLarge)}>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>Use the Service to download any file, software, media or other content from it.</Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>Communicate with us through email, social media, or by phone or any other means.</Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>Provide us with your name, email address or other identifying information.</Trans>
            </Typography>
          </li>
        </ul>

        {/* How we use your information */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>How we use your information</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We use the information that we collect about you or that you provide to us through providing the Service. We may use your information:
          </Trans>
        </Typography>
        <ul className={clsx(classes.unorderedList, classes.padLarge)}>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To operate the Service and make its contents available to you. We do not monitor or track User Content except as may be required by applicable law;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To provide you with information, products or services that you request from us. We use your information to (i) provide you with a personalized service; (ii) facilitate payments on the Service; and (iii) communicate with you via email, text message, push notification, or otherwise;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To contact you via email, SMS, push notifications, or otherwise to provide administrative notices relevant to your use of the Service;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To provide you with customer support and assist with the provision of the Service, or to assist in resolving complaints or disputes relating to the Service;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To notify you about changes to our Service or any products or features we offer or provide though it;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To enforce our Terms and other agreements, including for billing or notifying you about changes to our Service or any products or services that we offer;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To fulfill the purposes for which you provided the information or that were described when it was collected or for any other purpose for which you provide it;
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                To carry out our obligations and comply with applicable law; and
              </Trans>
            </Typography>
          </li>
          <li>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                For any other purpose with your consent and as otherwise outlined in our Terms.

              </Trans>
            </Typography>
          </li>
          
        </ul>

        {/* Disclosure of your information */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Disclosure of your information</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We may disclose the information that we collect about you or that you provide to the Service in accordance with this Privacy Policy. We may share your personal information with third-parties for the following reasons:
          </Trans>
        </Typography>

        {/* Data security */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Data security</Trans>
        </Typography>


        {/* Data retention */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Data retention</Trans>
        </Typography>
       

        {/* User Rights */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>User Rights</Trans>
        </Typography>
        

        {/* Opting-Out of Communications */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Opting-Out of Communications</Trans>
        </Typography>
       
        {/* Children’s Privacy */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Children’s Privacy</Trans>
        </Typography>


        {/* Changes to our Privacy Policy */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Changes to our Privacy Policy</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We may make changes to our Privacy Policy from time to time. It is our policy to post any changes we make on this page. If we make any material changes to how we treat your personal information, we will notify you by emailing the email address specified in your account or by posting a notice about the changes on a conspicuous area of the Service. 
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We include the date the privacy policy was last revised at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically visiting our Service and this Privacy Policy to check for any changes.
          </Trans>
        </Typography>

        {/* Contact */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Contact</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            If you have any questions, comments, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
          </Trans>
        </Typography>

        
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            <strong>Privacy Officer</strong>
            <br></br>
            <a
              className={clsx(classes.emailLink)}
              href="mailto:support@chainsafe.io"
            >
              support@chainsafe.io
            </a>
          </Trans>
        </Typography>
      </div>
    </div>
  )
}

export default TermsOfServicePage
