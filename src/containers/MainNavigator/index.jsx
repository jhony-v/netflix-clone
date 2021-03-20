import React from 'react'
import NetflixNameLogo from 'components/Application/NetflixNameLogo'
import FixedHeaderNavigator from 'components/Layouts/FixedHeaderNavigator'
import LinksNavigator from 'containers/LinksNavigator'
import BaseActionButton from 'components/Common/Buttons/BaseActionButton'
import { navigate } from 'gatsby-link'

const MainNavigator = ({ children }) => {
    const headerComponent = (
        <div className="flex w-full p-2 items-center flex-col sm:flex-row">
            <NetflixNameLogo />
            <div className="ml-10 w-full sm:w-auto">
                <LinksNavigator />
            </div>
            <div className="ml-auto">
            <BaseActionButton onClick={()=>navigate("/login")}>Sign In</BaseActionButton>
            </div>
        </div>
    )
    return (
        <FixedHeaderNavigator header={headerComponent} main={children} />
    )
}

export default MainNavigator
