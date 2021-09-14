import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Grid, Typography } from "@chainsafe/common-components"
import { Trans } from "@lingui/macro"
import LanguageSelection from "../LanguageSelector"

const useStyles = makeStyles(
  ({ breakpoints, palette, zIndex, constants }: ITheme) => {
    return createStyles({
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        height: `${constants.headerHeight}px`,
        position: "fixed",
        padding: "1rem",
        zIndex: zIndex?.layer4,
        background: "#0f0f0f",
        [breakpoints.down("sm")]: {
          padding: "none",
        },
        [breakpoints.up("xl")]: {
          height: constants.generalUnit * 9,
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
      logo: {
        width: constants.generalUnit * 4,
        height: constants.generalUnit * 4,
        margin: constants.generalUnit,
      },
      navlink: {
        color: palette.common.white.main,
        textDecoration: "none",
        fontWeight: "bold",
        "&:hover": {
          color: palette.primary.main,
          transition: "ease-in 0.2s",
        },
      },
      separator: {
        color: palette.common.black.main,
      },
    })
  },
)

const NavBar: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container xs={12}>
        <Grid item justifyContent="center" alignItems="flex-start">
          <Grid container alignItems="center">
            <img
              className={classes.logo}
              src="/csf_logo.png"
              alt="chainsafe files logo"
            />
            <Typography variant="h5">
              <a href="/" className={classes.navlink}>
                ChainSafe Files
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item justifyContent="flex-end" alignItems="center" flexDirection="row">
          <Typography variant="h5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.files.chainsafe.io/"
              className={classes.navlink}
              >
                Software Stats
            </a>
          </Typography>
        <LanguageSelection/>
        </Grid>
      </Grid>
    </div>
  )
}

export default NavBar
