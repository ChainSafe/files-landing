import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import {Typography} from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
    ({constants, palette, breakpoints, typography}: ITheme) => {
    return createStyles({
        container: {
          minHeight: "60vh",
          [breakpoints.up(1300)]: {
            height: "calc(100% - 180px)",
            paddingTop: "90px",
            paddingBottom: "90px",
          },
          [breakpoints.up(1980)]: {
            height: "calc(100% - 360px)",
            paddingTop: "180px",
            paddingBottom: "180px",
            minHeight: "60vh",
          },
          [breakpoints.up(2560)]: {
            height: "calc(100% - 600px)",
            paddingTop: "300px",
            paddingBottom: "300px",
            minHeight: "60vh",
          },
          [breakpoints.down(1300)]: {
            height: "calc(100% - 120px)",
            paddingTop: "60px",
            paddingBottom: "60px",
          },
          [breakpoints.down(1079)]: {
             height: "calc(100% - 100px)",
            paddingTop: "50px",
            paddingBottom: "50px",
            justifyContent: "flex-start",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        titleText: {
          fontWeight: 400,
          fontSize: "56px",
          lineHeight: "64px",
          [breakpoints.down(1079)]: {
            fontSize: "38px",
            lineHeight: "46px",
          }
        },
        bold: {
          fontWeight: 800,
        },
        reduceLeading: {
          letterSpacing: "-1.5px",
        },
        white: {
          color: palette.common.white.main,
        },
        singleColText: {
          [breakpoints.up('md')]:{
            textAlign: "left",
          },
          [breakpoints.down('md')]: {
            textAlign: "left"
          },
          maxWidth: 600,
        },
        headerContentContainer: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "2rem",
          height: `calc(100vh - ${constants.headerHeight}px)`,
          "& > img": {
            maxHeight: "70%",
            [breakpoints.down('md')]:{
              width: "90%",
            }
          },
          "& > span": {
            fontSize: "38px",
            lineHeight: "48px",
            marginBottom: constants.generalUnit * 3,
            [breakpoints.down('md')]:{
              maxWidth: "90%",
              textAlign: "left",
            },
            [breakpoints.up(3500)]:{
              fontSize: "38px",
              marginBottom: constants.generalUnit * 7,
            },
          },
        },
        yellow:{ 
          color: palette.additional["yellow"][4],
        },
        button: {
          background: palette.primary.main,
          fontSize: "18px",
          lineHeight: "26px",
          padding: constants.generalUnit,
          transition: "all ease-in-out 0.1s",
          "&:hover, &:active, &:focus": {
            background: palette.additional["geekblue"][5]
          },
          "& > a": {
            color: palette.common.white.main,
            textDecoration: "none",
          }
        },
    })
})

const Hero: React.FC = () => {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <section>
          <div className={classes.headerContentContainer}>
                <Typography component="p" className={clsx(classes.titleText, classes.reduceLeading, classes.white)}>
                  <Trans>
                    Encrypted file storage.
                  </Trans>
                </Typography>
                <Typography component="p" className={clsx(classes.titleText, classes.reduceLeading, classes.white)}>
                  <Trans>
                    Now with sharing.
                  </Trans>
                </Typography>
                <img src="/assets/hero.png" alt="" />
          </div>
        </section>
      </div>
    )
}

export default Hero;