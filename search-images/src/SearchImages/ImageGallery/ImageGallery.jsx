import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ photos }) {
    return (
        <ul className="ImageGallery">
            {photos.map(photo => (
                <li className="ImageGalleryItem" key={photo.id}>
                    <ImageGalleryItem
                        id={photo.id}
                        webFormat={photo.webformatURL}
                        alt={photo.tags}
                        largeImage={photo.largeImageURL}
                    />
                </li>
            ))}
        </ul>
    )
}