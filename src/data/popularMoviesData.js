import faker from "faker";

export default function popularMoviesData(category,totalItems = 6) {
    return {
        category,
        items : [...Array(totalItems)].map((_,index) => ({
            image : faker.random.image(),
            movieId : index,
            description : faker.lorem.paragraph(1),
            punctuation:4,
            title: faker.random.word() + " " + faker.random.word(),
            createdDate: new Date().toLocaleDateString(),
            category
        }))
    }
}
