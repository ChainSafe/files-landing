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
    }),
)

const CaliforniaPolicyPage: React.FC = () => {
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
          <Trans>Disclosures for California Residents</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           These disclosures are for residents of California who access and use ChainSafe Files as private individuals. You may authorize an agent to submit requests under this policy on your behalf. However, we will require written proof of the agent’s authority to do so and verify your identity.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Categories of personal information we collect and use</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           If you are a resident of California, the following are the categories of information we collect from you:
          </Trans>
        </Typography>
        <ol className={clsx(classes.padSmall, classes.lowercaseOrderedList)}>
          <li><strong>Identifiers.</strong> Name, account name, address, IP address, email address, and identifier assigned to your User Account.</li>
          <li><strong>Customer Records.</strong> Name, email address, credit card, Web3 wallet and Ethereum wallet address.</li>
          <li><strong>Analytics.</strong> Engagement with ChainSafe Files.</li>
          <li><strong>Internet Activity.</strong> Browsing history, browser type, search history, browser language and information regarding your interaction with our Service collected automatically.</li>
          <li><strong>Geolocation Data.</strong> Information that location-enabled services collect through Wi-Fi and GPS.</li>
        </ol>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           We collect and use these categories of personal information for the business purposes described in our Privacy Policy’s How We Use Your Information section, in order to provide and manage our Service. We may disclose information in the following categories with our partners to assist with our operations and provide the Services: (a) Identifiers, (b) Customer Records, (c) Analytics, (d) Geolocation Data.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Right to Know</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           If you are a California resident and use the ChainSafe Files as a private individual, you may have a right to receive a yearly accounting of:
          </Trans>
        </Typography>
        <ol className={classes.lowercaseOrderedList}>
          <li>A description of the categories of personal information disclosed;</li>
          <li>The right to know more about personal information that we have collected or disclosed, including:</li>
          <ol className={classes.romanOrderedList}>
            <li>The categories of personal information that we have collected or shared about you in the preceding twelve (12) months,</li>
            <li>The categories of sources from which we have collected that information in the preceding twelve (12) months,</li>
            <li>The commercial or business reason(s) we have collected or shared that information,</li>
            <li>The categories of third-parties with whom we have shared that information in the preceding twelve (12) months, and</li>
            <li>Pursuant to a verifiable request, the specific pieces of information that we have collected about you.</li>
          </ol>
        </ol>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           <strong>ChainSafe does not sell information.</strong> Depending on the nature of your request, we may need additional information to verify your identity.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Right to Delete</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           You also have the right to delete the personal information we have collected from you. However, this is not an absolute right, and ChainSafe may have legal grounds for keeping such data. To exercise any of these rights, please submit a request to support@chainsafe.io. In the request, please specify which right you are seeking to exercise and the scope of the request. We will confirm receipt of your request within fourteen (14) days. We may require specific information from you to help us verify your identity and process your request. If we are unable to verify your identity, we may deny your requests to know or delete it.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Shine the Light</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           If you are a resident of California, you may request a list of the categories of third-parties to whom we disclose such information. To exercise a request, please contact us at support@chainsafe.io. 
          </Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           Requests must include “California Shine the Light Request” in the subject line and include your name, street address, city, state, and ZIP code. We may require additional information from you to allow us to verify your identity. This may only be requested once during any calendar year.
          </Trans>
        </Typography>
        <Typography
          component="h2"
          variant="h3"
          className={clsx(classes.title, classes.padLarge)}
        >
          <Trans>Non-Discrimination</Trans>
        </Typography>
        <Typography
          component="p"
          variant="body1"
          className={clsx(classes.text, classes.padSmall)}
        >
          <Trans>
           If you choose to exercise any of the rights listed above, you have the right to non-discriminatory treatment by ChainSafe.
          </Trans>
        </Typography>
      </div>
    </div>
  )
}

export default CaliforniaPolicyPage
