import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Trans } from "@lingui/macro"
import clsx from "clsx"
import { Typography } from "@chainsafe/common-components"

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
    container: {
      width: "100%",
      [breakpoints.down(960)]:{
        overflowX: "hidden",
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#fafafa",
    },
    featureTextContainer: {
      display: "flex",
      padding: constants.generalUnit * 4,
      justifyContent: "center",
      alignItems: "baseline",
      background: "#fafafa",
      maxWidth: "90%",
      [breakpoints.down(960)]:{
        padding: constants.generalUnit * 2,
      },
      "&:first-of-type":{
        [breakpoints.down(960)]:{
          paddingTop: constants.generalUnit * 5,
        },
        paddingTop: constants.generalUnit * 10,
      },
      "&:last-of-type":{
        [breakpoints.down(960)]:{
          paddingBottom: constants.generalUnit * 5,
        },
        paddingBottom: constants.generalUnit * 10,
      },
    },
    imgContainer: {
      [breakpoints.down('599')]: {
        "& > img": {
          width: "25px",
          maxWidth: "25px",
          height: "25px",
          marginRight: "1.5rem",
        }
      },
      width: '140px',
      maxWidth: '140px',
      height: "25px",
      marginRight: "2rem",
    },
    featureHeading: {
      fontWeight: 600,
      fontSize: "38px",
      lineHeight: "44px",
      maxWidth: "80%",
      letterSpacing: "-1.25px",
      marginBottom: constants.generalUnit,
      [breakpoints.down(999)]: {
        maxWidth: "95%",
        fontSize: "32px",
        lineHeight: "40px",
      },
    },
    featureBodyTextContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      maxWidth: "600px",
    },
    bodyTextWrapper: {
      marginBottom: constants.generalUnit,
      "& > a": {
        color: palette.additional["gray"][9],
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    bodyText: {
      fontSize: "17px",
      lineHeight: "24px",
      [breakpoints.down(999)]: {
        maxWidth: "90%",
      },
      maxWidth: "80%",
      marginBottom: constants.generalUnit,
      [breakpoints.up(3500)]:{
        fontSize: "24px",
        lineHeight: "34px",
      }
      },
      hoverLink: {
        "&:hover": {
          color: palette.primary.main,
          transition: "ease-in 0.2s",
        },
      },
  })
})

const FeaturesList:React.FC = () => {
    const classes = useStyles();

  return (
    <article className={classes.container}>
       <div className={classes.featureTextContainer}>
         <div className={classes.imgContainer}>
           <img src="/assets/li-01.png" alt="Brightly colored glitchy vertical stripes"/>
          </div>
          <div className={classes.featureBodyTextContainer}>
          <Typography component="p" className={clsx(classes.featureHeading)}><Trans>Privacy meets convenience.</Trans></Typography>
            <div className={classes.bodyTextWrapper}>
              <p className={clsx(classes.bodyText)}>
                <strong>
                  <Trans>
                  Perhaps you’re working on a group project. Or you’re a DAO packed with anonymous contributors. We’ve got permissions controls to support many flavours of anonymity, whether you prefer an email or an Ethereum wallet.
                  </Trans>
                </strong>
              </p>
            </div>
          </div>
        </div>
       <div className={classes.featureTextContainer}>
         <div className={classes.imgContainer}>
          <img src="/assets/li-02.png" alt="Brightly colored glitchy vertical stripes"/>
          </div>
          <div className={classes.featureBodyTextContainer}>
          <Typography component="p" className={clsx(classes.featureHeading)}><Trans>Built for peace of mind.</Trans></Typography>
            <div className={classes.bodyTextWrapper}>
              <p className={clsx(classes.bodyText)}>
                <strong>
                  <Trans>
                  All uploaded content is encrypted end-to-end with AES-256. Your files can only be seen by you and chosen others <a href="https://github.com/ChainSafe/ui-monorepo/" rel="noopener noreferrer" target="__blank" className={classes.hoverLink}>(verify our code on GitHub!).</a> We are not in the business of selling your data, and we promise to never change that.
                  </Trans>
                </strong>
              </p>
            </div>
          </div>
        </div>
       <div className={classes.featureTextContainer}>
         <div className={classes.imgContainer}>
          <img src="/assets/li-03.png" alt="Brightly colored glitchy vertical stripes"/>
          </div>
          <div className={classes.featureBodyTextContainer}>
          <Typography component="p" className={clsx(classes.featureHeading)}><Trans>Powered by peer-to-peer.</Trans></Typography>
            <div className={classes.bodyTextWrapper}>
              <p className={clsx(classes.bodyText)}>
                <strong>
                  <Trans>
                  Autonomy and privacy go hand-in-hand. We're doing our best to reduce our role as a middleman by storing your files on the <a href="https://ipfs.io/" rel="noopener noreferrer" target="__blank" className={classes.hoverLink}>IPFS</a> and <a href="https://filecoin.io/" rel="noopener noreferrer" target="__blank" className={classes.hoverLink}>Filecoin networks</a>. Plus, we've decentralized our login system to minimize trust and maximize security.
                  </Trans>
                </strong>
              </p>
            </div>
          </div>
        </div>
       <div className={classes.featureTextContainer}>
         <div className={classes.imgContainer}>
          <img src="/assets/li-04.png" alt="Brightly colored glitchy vertical stripes"/>
          </div>
          <div className={classes.featureBodyTextContainer}>
          <Typography component="p" className={clsx(classes.featureHeading)}><Trans>Open-source and pluggable.</Trans></Typography>
            <div className={classes.bodyTextWrapper}>
              <p className={clsx(classes.bodyText)}>
                <strong>
                  <Trans>
                  We’ve released the part of our stack that interacts with the Filecoin network as a <a href="https://storage.chainsafe.io/" rel="noopener noreferrer" target="__blank" className={classes.hoverLink}>modular product</a>, so you can hook up decentralized storage to your apps. 
                  </Trans>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </article>
  )
}

export default FeaturesList;