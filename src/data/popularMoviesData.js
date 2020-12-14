import faker from "faker";

export default function popularMoviesData(category,totalItems = 6) {
    return {
        category,
        items : [...Array(totalItems)].map((_,index) => ({
            image : faker.random.image(),
            movieId : index,
            description : "Save your favorites easily and always have something to watch. Save your favorites easily.",
            punctuation:4,
            title: "Netflix clone",
            createdDate: new Date().toLocaleDateString()
        }))
    }
}
