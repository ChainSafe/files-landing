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
          <Trans>EEA</Trans>
        </Typography>

      </div>
    </div>
  )
}

export default EEAPolicyPage
