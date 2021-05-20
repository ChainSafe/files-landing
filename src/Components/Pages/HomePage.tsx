import React, { useEffect } from "react"
import NavBar from "../Modules/NavBar"
import Landing from "../Subpages/Landing"
import Footer from "../Modules/Footer"
import { useParams } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"

const HomePage: React.FC = () => {
  const { lang } = useParams()
  const { availableLanguages, selectedLanguage, setActiveLanguage } = useLanguageContext()

  useEffect(() => {
    console.log('lang', lang)
    if (!lang) return

    const availableRoute = availableLanguages.find((availableLanguage) => availableLanguage.id === lang)
    console.log('availableRoot', availableRoute)

    if(availableRoute !== undefined && selectedLanguage !== lang ){
      setActiveLanguage(lang, false)
    }
  } 
    , [availableLanguages, lang, selectedLanguage, setActiveLanguage]
  )
  return (
    <div>
      <NavBar />
      <Landing />
      <Footer />
    </div>
  )
}

export default HomePage
