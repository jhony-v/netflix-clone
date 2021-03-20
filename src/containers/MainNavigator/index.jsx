import React from 'react'
import NetflixNameLogo from 'components/Application/NetflixNameLogo'
import FixedHeaderNavigator from 'components/Layouts/FixedHeaderNavigator'
import LinksNavigator from 'containers/LinksNavigator'

const MainNavigator = ({ children }) => {
    const headerComponent = (
        <div className="flex w-full p-2 items-center flex-col sm:flex-row">
            <NetflixNameLogo />
            <div className="ml-10 w-full sm:w-auto">
                <LinksNavigator />
            </div>
        </div>
    )
    return (
        <FixedHeaderNavigator header={headerComponent} main={children} />
    )
}

export default MainNavigator
