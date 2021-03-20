import BaseActionButton from 'components/Common/Buttons/BaseActionButton'
import React from 'react'

const TvShowsCallToAction = () => {
    return (
        <div className="flex items-center flex-col w-11/12 sm:max-w-3xl m-auto">
            <h2 className="text-center text-white font-bold mb-10 text-4xl">
            There’s even more to watch.
            </h2>
            <p className="text-center text-white text-2xl mb-10">
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>
            <BaseActionButton>JOIN NOW</BaseActionButton>
        </div>
    )
}

export default TvShowsCallToAction
