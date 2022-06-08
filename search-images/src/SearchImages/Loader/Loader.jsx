import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className='Spinner'>
            <Audio
                height="80"
                width="80"
                color='white'
                ariaLabel='loading'
            />
        </div>
    )
}