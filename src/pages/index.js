import React from "react"
import MainNavigator from "containers/MainNavigator"
import App from "modules/Home/App"
import FooterNavigation from "components/Layouts/FooterNavigation"

export default function Home() {
  return (
    <MainNavigator>
      <App/>
      <FooterNavigation/>
    </MainNavigator>
  )
}
