import React from "react"
import { Switch, Route } from "@chainsafe/common-components"
import HomePage from "./Pages/HomePage"
import TermsOfServicePage from "./Pages/TermsOfServicePage"
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage"
import EEAPolicyPage from "./Pages/EEAPolicy"
import CaliforniaPolicyPage from "./Pages/CaliforniaPolicy"

export const ROUTE_LINKS = {
  Home: "/",
  HomeLang: (lang = ":lang") => `/${lang}`,
  Pricing: "/pricing",
  TermsOfService: "/terms-of-service",
  PrivacyPolicy: "/privacy-policy",
  CaliforniaPolicy: "/privacy-policy-california",
  EEAPolicy: "/privacy-policy-EEA-UK",
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_LINKS.Home} component={HomePage} />
      <Route
        exact
        path={ROUTE_LINKS.TermsOfService}
        component={TermsOfServicePage}
      />
      <Route
        exact
        path={ROUTE_LINKS.PrivacyPolicy}
        component={PrivacyPolicyPage}
      />
      <Route
        exact
        path={ROUTE_LINKS.CaliforniaPolicy}
        component={CaliforniaPolicyPage}
      />
      <Route
        exact
        path={ROUTE_LINKS.EEAPolicy}
        component={EEAPolicyPage}
      />
      <Route exact path={ROUTE_LINKS.HomeLang()} component={HomePage} />
    </Switch>
  )
}

export default Routes
