import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Typography } from "@chainsafe/common-components"
import { Trans } from "@lingui/macro"

const useStyles = makeStyles(({ palette, constants, breakpoints }: ITheme) => {
  return createStyles({
    root: {
      padding: "1rem 0",
      backgroundColor: palette.additional["gray"][1],
      [breakpoints.up("xl")]: {
        padding: `1rem 72px`,
      },
      paddingLeft: constants.generalUnit * 2,
      paddingRight: constants.generalUnit * 2,
    },
    message: {
      color: palette.additional["gray"][8],
      textAlign: "center",
      fontSize: "1.1rem",
      fontWeight: 500,
      "& a": {
        color: palette.additional["gray"][7],
        textDecoration: "none",
        "&:hover": {
          color: palette.additional["gray"][3],
          transition: "ease-in 0.2s",
        },
      },
    },
  })
})

const DiscontinuedBanner: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography component="p" className={classes.message}>
        <Trans>This product has been discontinued. Please reach out to </Trans>
        {" "}
        <a href="mailto:support@files.chainsafe.io">support@files.chainsafe.io</a>
        {" "}
        <Trans> if you have any questions or concerns.</Trans>
      </Typography>
    </div>
  )
}

export default DiscontinuedBanner 