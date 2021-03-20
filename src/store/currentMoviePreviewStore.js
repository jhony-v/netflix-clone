import { useEffect, useState } from "react";
import { Subject } from "rxjs";

const currentMoviePreviewStore = new Subject();


/* --------------------------------- actions -------------------------------- */

export const onSelectMovieToPreview = payload => {
    currentMoviePreviewStore.next({
        isPreview : true,
        movie : payload
    })
}

export const onClearCurrentMovieToPreview = () => {
    currentMoviePreviewStore.next({
        isPreview : false,
        movie : null
    })
}

/* ---------------------------------- hooks --------------------------------- */

export const useCurrentMoviePreviewStore = () => {
    const [ data , setData ] = useState({
        isPreview : false,
        movie : null
    });

    useEffect(() => {
        const currentMoviePreviewSubscriber = currentMoviePreviewStore.subscribe(setData);
        return () => {
            currentMoviePreviewSubscriber.unsubscribe();
        };
    },[])

    return {
        data
    }
}