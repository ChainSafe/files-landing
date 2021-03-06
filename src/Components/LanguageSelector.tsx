import React, { useMemo } from "react"
import { useLanguageContext } from "./Contexts/LanguageContext"
import { MenuDropdown, useHistory } from "@chainsafe/common-components"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { ROUTE_LINKS } from "./Routes"

const useStyles = makeStyles(
  ({ constants, palette }: ITheme) => {
    return createStyles({
      root: {
        marginLeft: "1rem",
        color: palette.common.white.main,
        "&:hover": {
          color: palette.primary.main,
          transition: "ease-in 0.2s",
        },
        fontWeight: "bold",
        lineHeight: `${constants.generalUnit*3}px`
    },
    options: {
      color: palette.common.black.main,
      fontWeight: "bold",
    },
    title: {
        fontSize: `${constants.generalUnit*2}px`,
        fontWeight: "bold",
        width: "100%"
      },
    item: {
      color: palette.common.black.main
    }
    })
  }
)

const LanguageSelection = () => {
    const classes = useStyles()
    const { redirect } = useHistory()
    const { availableLanguages, selectedLanguage, setActiveLanguage } = useLanguageContext()
    const currentLanguage = useMemo(
      () => availableLanguages.find((lang) => lang.id === selectedLanguage)?.label
      , [availableLanguages, selectedLanguage]
    )
  
    return (
        <MenuDropdown
            animation="none"
            anchor="top-right"
            className={classes.root}
            classNames={{
                options: classes.options,
                titleText: classes.title,
                item: classes.item
            }}
            menuItems={availableLanguages.map((lang) => ({
                contents: (
                    <span>
                        {lang.label}
                    </span>
                ),
                onClick: () => {
                    setActiveLanguage(lang.id)
                    redirect(ROUTE_LINKS.HomeLang(lang.id))
                }
            }))}
            title={currentLanguage}
        />
    )
  }
  
  export default LanguageSelection
