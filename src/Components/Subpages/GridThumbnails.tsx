import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Trans } from "@lingui/macro"

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
    bodyContainer: {
      width: "100%",
      [breakpoints.down(960)]:{
        overflowX: "hidden",
      },
    },
    bodyContentContainer: {
      display: "grid",
      width: "100%",
      [breakpoints.between(960, 1380)]: {
        margin: "3% 10%",
      },
      [breakpoints.up('md')]: {
        height: `calc(100vh - ${constants.headerHeight}px)`,
        gridTemplateColumns: "1fr",
        marginTop: "8%",
      },
      [breakpoints.up('lg')]:{
        margin: "5%",
      },
      [breakpoints.up(3800)]:{
        margin: "0 10%",
      },
      [breakpoints.down('md')]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        width: "100%",
      },
    },
    gifGridContainer: {
      [breakpoints.up(1500)]:{
        minHeight: "100vh",
      },
      [breakpoints.down(1500)]:{
        minHeight: "auto",
        padding: `${constants.generalUnit * 3}px 0`,
      },
      [breakpoints.up(3500)]:{
        minHeight: "unset",
        padding: "15vh",
      },
      [breakpoints.down('sm')]:{
        minHeight: "auto",
        padding: `${constants.generalUnit * 3}px 0`,
      },
      width: "100%",
      background: "#0f0f0f",
    },
    gifGridContentContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "inherit",
    },
    gifGrid: {
      display: "grid",
      justifyItems: "center",
        [breakpoints.up('lg')]: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        },
        [breakpoints.down('lg')]:{
          maxWidth: "100%",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gridTemplateRows: "1",
        },
        [breakpoints.down('sm')]:{
          maxWidth: "100%",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gridTemplateRows: "1",
        }
    },
    singleColContainer: {
      display: "flex",
      minWidth: "85vw",
      alignItems: "center",
      justifyContent: "center",
      padding: "10vh",
      [breakpoints.down(500)]:{
        padding: "5vh",
      },
      "& > p": {
        color: "white",
        fontSize: "36px",
        fontFamily: "Anderson Grotesk Ultrabold, Neue Montreal",
        textAlign: "center",
        lineHeight: "44px",
        [breakpoints.down(500)]: {
          fontSize: "24px",
          lineHeight: "32px",
        },
        [breakpoints.up(3500)]:{
          fontSize: "62px",
          lineHeight: "72px",
          marginTop: "2%",
        }
      }
    },
    gifThumbnailContainer: {
      margin: "5%",
      [breakpoints.down(500)]:{
        margin: "24px 5%"
      },
      [breakpoints.up(3500)]:{
        margin: "2%",
      }
    },
    gifThumbnail: {
      maxWidth: "100%",
      objectFit: "contain",
      objectPosition: "left top",
      [breakpoints.up(3500)]:{
        width: "350px",
        height: "350px",
      },
      [breakpoints.up(1380)]: {
        width: "250px",
        height: "250px",
      },
      [breakpoints.down(1380)]: {
        width: "200px",
        height: "200px",
      },
      [breakpoints.down(500)]: {
        width: "80px",
        height: "80px",
      },
      "& > img":{
        objectFit: "contain",
        objectPosition: "left top",
        [breakpoints.up(1380)]:{
          height: "250px",
          width: "250px",
        },
        [breakpoints.down(1380)]: {
          width: "200px",
          height: "200px",
        },
        [breakpoints.up(3500)]:{
        width: "350px",
        height: "350px",
        },
        [breakpoints.down(500)]: {
          width: "80px",
          height: "80px",
        },
      }
    },
  })
})

const GridThumbnails: React.FC = () => {
  const classes = useStyles()
  return (
      <main className={classes.bodyContainer}>
      {/* Gif */}
      <article className={classes.gifGridContainer}>
        <div className={classes.gifGridContentContainer}>
          <div className={classes.gifThumbnailContainer}>
            <div className={classes.gifGrid}>
            <div className={classes.gifThumbnail}>
              <img src="/assets/monte.png" alt="Montecarlo Data visualization"/>
            </div>
            <div className={classes.gifThumbnail}>
              <img src="/assets/sound.png" alt="Audio file soundwaves"/>
            </div>
            <div className={classes.gifThumbnail}>
              <img src="/assets/lotus.png" alt="Lotus field"/>
            </div>
            <div className={classes.gifThumbnail}>
              <img src="/assets/rock.png" alt="stone with glitch effect"/>
            </div>
            </div>
            <div className={classes.singleColContainer}>
              <p><Trans>Your digital home should be like your physical one. Peaceful, private, and all yours.</Trans></p>
            </div>
            <div className={classes.gifGrid}>
            <div className={classes.gifThumbnail}>
              <img src="/assets/book.png" alt="Ebook excerpt"/>
            </div>
            <div className={classes.gifThumbnail}>
              <img src="/assets/bubble.png" alt="Holographic bubble render"/>
            </div>
            <div className={classes.gifThumbnail}>
              <img src="/assets/hash.png" alt="Hash"/>
            </div>
            <div className={classes.gifThumbnail}>
              <img src="/assets/snowboard.png" alt="Snowboarding gopro footage"/>
            </div>
            </div>
          </div>
        </div>
      </article>
      </main>
  )
}

export default GridThumbnails
