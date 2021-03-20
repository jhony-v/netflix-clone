import faker from "faker";

export function tvWatchMovies(totalTvWatch) {
    return [...Array(totalTvWatch)].map(() => {
        return {
            image : faker.random.image(),
            name : faker.random.word() + " " + faker.random.word()
        }
    })
}

export function tvWatchMoviesWithCategories() {
    return ["TV Dramas","Watch Together for Older Kids","TV Sci-Fi & Horror"].map((e)=>({
        category : e,
        movies : tvWatchMovies(4)
    }))
}