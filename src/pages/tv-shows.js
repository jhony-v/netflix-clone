import FooterNavigation from 'components/Layouts/FooterNavigation'
import TvShowsCallToAction from 'containers/Announces/TvShowsCallToAction'
import MainNavigator from 'containers/MainNavigator'
import React from 'react'

export default function TvShows() {
    return (
        <MainNavigator>
            <TvShowsCallToAction/>
            <FooterNavigation/>
        </MainNavigator>
    )
}
