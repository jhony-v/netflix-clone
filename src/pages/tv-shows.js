import React from 'react'
import FooterNavigation from 'components/Layouts/FooterNavigation'
import TvShowsCallToAction from 'containers/Announces/TvShowsCallToAction'
import MainNavigator from 'containers/MainNavigator'
import App from 'modules/TvShows/App'

export default function TvShows() {
    return (
        <MainNavigator>
            <App/>
            <TvShowsCallToAction/>
            <FooterNavigation/>
        </MainNavigator>
    )
}
