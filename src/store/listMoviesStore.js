import popularMoviesData from "data/popularMoviesData";
import { useEffect } from "react";
import { useState } from "react";
import { Subject } from "rxjs"

const listMoviesStoreObservable = new Subject();


/* --------------------------------- actions -------------------------------- */

export const onFetchMovies = () => {
    const allMovies = ["Terror", "Series"].map(e => popularMoviesData(e, 5))
    listMoviesStoreObservable.next(allMovies);       
}


/* ---------------------------------- hooks --------------------------------- */


export const useListMoviesStore  = () => {
    const [ data , setData ] = useState([]);

    useEffect(() => {
        const listMoviesSubscriber = listMoviesStoreObservable.subscribe(setData);
        return () => listMoviesSubscriber.unsubscribe();
    },[])

    return {
        data
    }

}