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
  useScrollToTop(true);
  return (
    <div style={{background: "#fafafa"}}>
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
            <Trans>
              <strong>Information you may provide to us:</strong> through the course of using the Service, you may be prompted to provide us with your: (i) name; (ii) email address; (iii) password; (iv) authentication information; (v) Web3 wallet; and (vi) payment information.
            </Trans>
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
            <Trans>
              <strong>Technical information:</strong> this includes your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, or information about your internet connection (IP address), the equipment you use to access the Service, and usage details. This might also include IDs of errors, communications with the support team or bug reports to improve the Service.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Statistical and Aggregated information:</strong> this includes information that we receive across users that does not directly identify a person. Any aggregated information will be anonymized and de-identified if analyzed and used.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Details of your usage of the Service:</strong> this includes traffic data, logs, other communication data and the resources that you access and use. This may also include the URLs, pages you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, or any phone number used to call us.
            </Trans>
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
        <ul className={clsx(classes.unorderedList, classes.padSmall)}>
          <li>
            <Trans>Use the Service to download any file, software, media or other content from it.</Trans>
          </li>
          <li>
            <Trans>Communicate with us through email, social media, or by phone or any other means.</Trans>
          </li>          
          <li>
            <Trans>Provide us with your name, email address or other identifying information.</Trans>
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
        <ul className={clsx(classes.unorderedList, classes.padSmall)}>
          <li>
            <Trans>
              To operate the Service and make its contents available to you. We do not monitor or track User Content except as may be required by applicable law;
            </Trans>
          </li>
          <li>
            <Trans>
              To provide you with information, products or services that you request from us. We use your information to (i) provide you with a personalized service; (ii) facilitate payments on the Service; and (iii) communicate with you via email, text message, push notification, or otherwise;
            </Trans>
          </li>
          <li>
            <Trans>
              To contact you via email, SMS, push notifications, or otherwise to provide administrative notices relevant to your use of the Service;
            </Trans>
          </li>
          <li>
            <Trans>
              To provide you with customer support and assist with the provision of the Service, or to assist in resolving complaints or disputes relating to the Service;
            </Trans>
          </li>
          <li>
            <Trans>
              To notify you about changes to our Service or any products or features we offer or provide though it;
            </Trans>
          </li>
          <li>
            <Trans>
              To enforce our Terms and other agreements, including for billing or notifying you about changes to our Service or any products or services that we offer;
            </Trans>
          </li>
          <li>
            <Trans>
              To fulfill the purposes for which you provided the information or that were described when it was collected or for any other purpose for which you provide it;
            </Trans>
          </li>
          <li>
            <Trans>
              To carry out our obligations and comply with applicable law; and
            </Trans>
          </li>
          <li>
            <Trans>
              For any other purpose with your consent and as otherwise outlined in our Terms.
            </Trans>
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
        <ol className={clsx(classes.romanOrderedList, classes.padLarge)}>
          <li>
            <Trans>
              <strong>Affiliated Companies:</strong> We may share your information with our subsidiaries, parent company and other affiliated entities to effectively provide you with the Service. 
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Third-Party Service Providers:</strong> We may share your information with trusted service providers, contractors, the organizations they act on behalf of, and other third-parties (such as decentralized protocols) that we use to support our business. For these third-party service providers to perform or facilitate these functions, they may require us to provide them with your information. If we provide them with your information, we will contractually obligate them to keep your information confidential, use it only for the purposes for which we disclose it to them, and to process the personal information with the same standards set out in this policy.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Payment Processors:</strong> Users may be able to submit payment information into the Service to pay for certain features. ChainSafe utilizes third-party payment processors to facilitate payments. We do not receive nor store any payment information on our servers. All payment transactions are encrypted when communicated through our third-party payment processor.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Storage Providers:</strong> We may process, store, and transfer your personal information in and to a foreign country, with different privacy laws that may or may not be as comprehensive as privacy laws in Canada. Whenever we engage a service provider, we require that its privacy and security standards adhere to this policy and applicable Canadian privacy legislation.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Commercial Partners:</strong> We may share your information or anonymized aggregated data derived from your information and the information of others with some of our commercial partners.  
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>Legal Requirements:</strong> We may disclose personal information in order to comply with any court order, law, or legal process, including to respond to any government or regulatory request, under applicable law.
            </Trans>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                Due to the end-to-end encryption provided through the Service, we will not be able to provide an unencrypted version of any User Content uploaded by a third-party unless we are provided with a shared key. The only information we may be able to share would be the personal information provided to us or User Content where a key to access it has been shared with us by a third-party.
              </Trans>
            </Typography>
          </li>
          <li>
            <Trans>
              <strong>Enforcement.</strong> We may disclose personal information in order to establish or exercise our legal rights, or to defend against legal claims, or when we believe it is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, data breaches, suspected fraud, situations involving potential threats to the physical safety of any person, violations of our Terms of Service, or as otherwise required by law.
            </Trans>
            <ol className={clsx(classes.lowercaseOrderedList, classes.padLarge)}>
              <li>
                <Trans>
                  <strong>Applicable Law:</strong> there may be laws under the jurisdictions that we operate in that compel us to disclose personal information or account data. If required, we may provide personal information or User Account files that we receive from you or a third-party in an unencrypted format.
                </Trans>
              </li>
              <li>
                <Trans>
                  <strong>Violent, Pornographic or other Illegal Content:</strong> it is a violation of our Terms of Service to upload illegal content or content that may affect the safety or well-being of others. If we are made aware that any User Content that you transmit through the Service contains material relating to child pornography, acts of terrorism, violent actions or other illegal material we may report it to the relevant authorities and remove the User Content from the Service.
                </Trans>
              </li>
            </ol>
          </li>
          <li>
            <Trans>
              <strong>Business Transactions:</strong> ChainSafe reserves the right to share your information in connection with any proposed or realized merger, divestiture, consolidation, restructuring, purchase, sale or any other type of business combination that requires its disclosure.
            </Trans>
          </li>
        </ol>

        {/* Data security */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Data security</Trans>
        </Typography>
        <Typography
        component="p"
        variant="body1"
        className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            ChainSafe Files uses physical, electronic, technical and administrative safeguards designed to secure your personal information from accidental loss and unauthorized access, use, modification, and disclosure. Any personal information stored and retrieved through the Service are encrypted end-to-end using AES-256 and HMAC encryption. Although we implement measures to protect your personal information, we cannot guarantee the security of your personal information transmitted to the Service over the internet. Any transmission of personal information through the Service is done at your own risk. We are not responsible for your circumvention of any privacy settings or security measures contained on the Service.
          </Trans>
        </Typography>

        {/* Data retention */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Data retention</Trans>
        </Typography>
        <ol className={clsx(classes.romanOrderedList, classes.padLarge)}>
          <li>
            <Trans>
              <strong>Retention Policy.</strong> To improve the Service, we may aggregate information from users after removing information that can allow them to be identified. You acknowledge and agree that we may use anonymized personal information for legitimate business purposes that cannot be associated with you or the User. We reserve the right to use such anonymized information without further notice.
            </Trans>
            <Typography
            component="p"
            variant="body1"
            className={clsx(classes.text, classes.padSmall)}
            >
              <Trans>
                We may periodically de-identify or delete personal information from inactive user accounts and unnecessary information that is flagged by our system. With the exception of aggregated or anonymized data, we will delete unnecessary or unused personal informational after two (2) years of inactivity on the Service.
              </Trans>
            </Typography>
          </li>
          <li>
            <Trans>
              <strong>Termination of Account.</strong> If your account on the Service is terminated, we may retain your personal information for a certain period of time (e.g., archive your personal information), which will be disclosed to you and performed in accordance with our practices under this Privacy Policy.
            </Trans>
          </li>
        </ol>
       
        {/* User Rights */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>User Rights</Trans>
        </Typography>
        <Typography
        component="p"
        variant="body1"
        className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            If you would like to exercise any of the following rights, please contact us at our email below:
          </Trans>
        </Typography>
        <ol className={clsx(classes.lowercaseOrderedList, classes.padLarge)}>
          <li>
            <Trans>
              <strong>
                Accessing, Correcting or Updating Your Information:{" "}
              </strong>
              You may request for us at any time to correct your information or to provide you with a copy of your personal information that we maintain in electronic format. 
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>
                Deleting Your Information:{" "}
              </strong>
                You may request for us at any time to have your personal information that we maintain deleted. We will comply with your request unless there are legitimate business or legal grounds for the continued retention of your personal information.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>
                Object to our Processing:{" "}
              </strong>
              You may request for us to restrict or cease the processing of your personal information if you believe it has been processed (i) in a manner contrary to applicable law; (ii) in a manner outside of the consent you provided; or (iii) after your consent has been withdrawn. We will comply with your request unless there are legitimate business or legal grounds for the continued processing of your personal information.

            </Trans>
          </li>
          <li>
            <Trans>
              <strong>
                Withdrawing Consent:{" "}
              </strong>
              You may withdraw your consent for our collection, use and disclosure of your personal information at any time. We will comply with your request unless it conflicts with our legal obligations or an established standard of practice. Please be aware that if you withdraw your consent, we may be unable to provide you with the Service.
            </Trans>
          </li>
          <li>
            <Trans>
              <strong>
                Transfers of Data:{" "}
              </strong>
              We and our affiliates and third-party service providers primarily store data about you, on decentralized servers located globally. If you reside or are located outside of Canada, we may send and store your data to Canada in order to provide and operate the Service. ChainSafe undertakes to ensure an adequate level of protection of any personal information transferred outside of Canada.
            </Trans>
          </li>
        </ol>

        {/* Opting-Out of Communications */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Opting-Out of Communications</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            We may send periodic marketing, promotional or informational emails to you in accordance with your communication preferences. These may include emails for future events and products. You may opt out of such communications at any time by following the opt-out instructions contained in the email or by contacting us at the email below.
          </Trans>
        </Typography>
       
        {/* Children’s Privacy */}
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Children’s Privacy</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
            The Service is not intended for children under thirteen (13) years of age. We do not knowingly collect personal information from children under thirteen (13) years of age. If you are under eighteen (18) years of age, we must receive your parent or legal guardian’s consent before we can collect, use or disclose your information on the Service. If we learn we have collected or received personal information from a child without verification of parental consent, we will delete that information. If you (i) believe we might have any information from or about a child; (ii) would like to review any personal information we may have collected about your child; or (iii) would like to request the deletion of your child’s personal information, please contact our Privacy Officer at the email address below.
          </Trans>
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
