import React from 'react'
import LinkItem from './LinkItem'

const LinksNavigator = () => {
    return (
        <ul className="flex items-center justify-evenly sm:justify-start">
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/tv-shows">Tv Shows</LinkItem>
            <LinkItem href="/movies">Movies</LinkItem>
            <LinkItem href="/my-list">My list</LinkItem>
        </ul>
    )
}

export default LinksNavigator
