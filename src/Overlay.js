import React from 'react'
import OverlayLoader from 'react-loading-overlay'

const Loader = () => {

    <OverlayLoader
        color={'red'}
        laoder="ScaleLoader"
        text="Laoding..Please wait!"
        active={true}
        backgroundColor={'black'}
        opacity=".4"
        spinner timeout={1000}>
    </OverlayLoader>

};

export default Loader;
