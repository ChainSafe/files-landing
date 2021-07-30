import React, { useEffect } from "react"
import NavBar from "../Modules/NavBar"
import GridThumbnails from "../Subpages/GridThumbnails"
import Footer from "../Modules/Footer"
import { useParams } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import Hero from "../Subpages/Hero"
import FeaturesList from "../Subpages/FeaturesList"

const HomePage: React.FC = () => {
  const { lang } = useParams()
  const { availableLanguages, selectedLanguage, setActiveLanguage } = useLanguageContext()

  useEffect(() => {
    if (!lang) return

    const availableRoute = availableLanguages.find((availableLanguage) => availableLanguage.id === lang)

    if(availableRoute !== undefined && selectedLanguage !== lang ){
      setActiveLanguage(lang, false)
    }
  } 
    , [availableLanguages, lang, selectedLanguage, setActiveLanguage]
  )
  return (
    <div>
      <NavBar /> 
      <Hero />
      <FeaturesList/>
      <GridThumbnails/>
      <Footer />
    </div>
  )
}

export default HomePage
