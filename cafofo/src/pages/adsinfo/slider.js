import React, { Component } from 'react';
import api from '../../services/api';
import { images } from './images';
import { Gallery, GalleryImage } from "react-gesture-gallery";

const INITIAL_INDEX = 0

export function Slider() {
    
    const [index, setIndex] = React.useState(INITIAL_INDEX)

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length - 1){
                setIndex (INITIAL_INDEX)
            } 
            else {
                setIndex(index + 1)
            }
        }, 6000)
        return () => clearInterval(interval)
    
    }, [index])

    return (
        <div style= {{
            height: '40vh',
            width: '100%',
            marginTop: '3%'
        }}>
            <Gallery
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}
            >
                {images.map(image => (
                    <GalleryImage objectFit="contain" src={image} />
                ))}
            </Gallery>
        </div>
    )
}