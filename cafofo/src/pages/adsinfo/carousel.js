import React, { Component } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    UncontrolledCarousel
} from 'reactstrap'

import { images } from './images'


export default class CarouselSlider extends Component {
    componentDidMount() {
        console.log(images)
    }

    render() {
        return (
            <div>
                <UncontrolledCarousel items={images} />
                Pica
            </div>
        )
    }
}