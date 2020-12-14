import React from "react"
import PopularMovieDescriptiveCard from "components/Common/PopularMovieDescriptiveCard/"
import popularMoviesData from "data/popularMoviesData"
import GridHorizontal from "components/Common/GridHorizontal"
import MainNavigator from "containers/MainNavigator"
import PreviewMovieDescriptiveWithVideo from "components/Common/PreviewMovieDescriptiveWithVideo"
import faker from "faker"
import ItemOptionOfMovie from "components/Common/ItemOptionOfMovie"

const allMovies = ["Terror", "Series"].map(e => popularMoviesData(e, 5))

export default function Home() {
  return (
    <MainNavigator>
      <PreviewMovieDescriptiveWithVideo
        punctuation={3}
        createdDate="10/02/2020"
        description="Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California."
        title="Netflix Movie - History"
        video="https://player.vimeo.com/external/448480646.sd.mp4?s=cf9243058cc6d110489c3715cb6aab60a4afdd7d&profile_id=164"
        moreDescriptions={[
          {
            key: "Key 1",
            value: "Key 1 - Value 1",
          },
          {
            key: "Key 2",
            value: "Key 2 - Value 2",
          },
          {
            key: "Key 3",
            value: "Key 3 - Value 3",
          },
        ]}
        image={faker.image.people()}
      >
        <ul className="flex justify-center items-center w-full">
        <ItemOptionOfMovie selected className="mr-3 ml-3">Preview</ItemOptionOfMovie>
        <ItemOptionOfMovie className="mr-3 ml-3">Episodes</ItemOptionOfMovie>
        <ItemOptionOfMovie className="mr-3 ml-3">Trailers or more</ItemOptionOfMovie>
        <ItemOptionOfMovie className="mr-3 ml-3">More like this</ItemOptionOfMovie>
        <ItemOptionOfMovie className="mr-3 ml-3">Details</ItemOptionOfMovie>
        </ul>
      </PreviewMovieDescriptiveWithVideo>
      {allMovies.map(({ category, items }, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <div className="text-white font-bold text-2xl p-5">{category}</div>
            <GridHorizontal className="grid-cols-5">
              {items.map(item => (
                <PopularMovieDescriptiveCard
                  {...item}
                  key={item.movieId}
                  h="180px"
                />
              ))}
            </GridHorizontal>
          </div>
        )
      })}
    </MainNavigator>
  )
}
