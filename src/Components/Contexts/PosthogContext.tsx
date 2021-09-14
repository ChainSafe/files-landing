import React, { useCallback, useEffect, useMemo, useState } from "react"
import posthog from "posthog-js"
import { Button, Typography, useLocation } from "@chainsafe/common-components"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"

export type PosthogContext = {
  posthogInitialized: boolean
  shouldShowBanner: boolean
}

type PosthogProviderProps = posthog.Config & {
  children: React.ReactNode | React.ReactNode[]
}

const PosthogContext = React.createContext<PosthogContext>({
  posthogInitialized: false,
  shouldShowBanner: false
})

const useStyles = makeStyles(
  ({ palette, breakpoints }: ITheme) => {
    return createStyles({
      cookieBanner: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: palette.primary.main,
        padding: "16px 32px",
        [breakpoints.down('sm')]: {
          padding: "16px 16px",
        }
      },
      buttonSection: {
        display: "flex",
        flexDirection: "row",
        "& > *": {
          margin: 8
        }
      }
    })
  }
)

const PosthogProvider = ({ children }: PosthogProviderProps) => {
  const [posthogState, setPosthogState] = useState({ hasOptedOut: false, hasOptedIn: false })
  const classes = useStyles()
  const posthogInitialized = useMemo(() =>
    !!process.env.REACT_APP_POSTHOG_PROJECT_API_KEY &&
    !!process.env.REACT_APP_POSTHOG_INSTANCE_ADDRESS,
    [])

  const refreshPosthogState = useCallback(() => {
    if (posthogInitialized) {
      const optedOut = posthog.has_opted_out_capturing()
      const optedIn = posthog.has_opted_in_capturing()
      setPosthogState({
        hasOptedOut: optedOut,
        hasOptedIn: optedIn
      })
    }
  }, [posthogInitialized])

  useEffect(() => {
    refreshPosthogState()
  }, [refreshPosthogState])

  const shouldShowBanner = useMemo(() =>
    posthogInitialized && !posthogState.hasOptedOut && !posthogState.hasOptedIn, [posthogState, posthogInitialized])

  const optInCapturing = useCallback(() => {
    if (posthogInitialized) {
      posthog.opt_in_capturing()
      refreshPosthogState()
    }
  }, [posthogInitialized, refreshPosthogState])

  const optOutCapturing = useCallback(() => {
    if (posthogInitialized) {
      posthog.opt_out_capturing()
      refreshPosthogState()
    }
  }, [posthogInitialized, refreshPosthogState])

  return (
    <PosthogContext.Provider
      value={{
        posthogInitialized,
        shouldShowBanner
      }}
    >
      {children}
      {shouldShowBanner &&
        <div className={classes.cookieBanner}>
          <Typography variant='h4'>This website uses cookies</Typography>
          <Typography variant='body2'>
           This website uses cookies that help the website function and track interactions for analytics purposes. You have the right to decline our use of cookies. For us to provide a customizable user experience to you, please click on the Accept button below. <a href="https://files.chainsafe.io/privacy-policy">Learn more</a>
          </Typography>
          <div className={classes.buttonSection}>
            <Button onClick={optOutCapturing}>Decline</Button>
            <Button onClick={optInCapturing}
              variant='outline'>Accept</Button>
          </div>
        </div>
      }
    </PosthogContext.Provider>
  )
}

function usePosthogContext() {
  const context = React.useContext(PosthogContext)
  if (context === undefined) {
    throw new Error("usePosthogContext must be used within a LanguageProvider")
  }
  return context
}

function usePageTrack() {
  const { pathname } = useLocation()
  const { posthogInitialized } = usePosthogContext()
  useEffect(() => {
    posthogInitialized && posthog.capture("$pageview")
  }, [pathname, posthogInitialized])
}

export { PosthogProvider, usePosthogContext, usePageTrack }