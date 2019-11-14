import React, { Component } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    UncontrolledCarousel
} from 'reactstrap'
import api from './../../services/api'

import { images } from './images'


export default class CarouselSlider extends Component {

    render() {

        const photos = [
            {
                src: this.props.adsDetail.image,
                key: '1'
            },
            {
                src: this.props.adsDetail.img,
                key: '2'
            }
        ]

        return (
            <div>
                {console.log(this.props.adsDetail)}
                <UncontrolledCarousel items={photos} />
            </div>
        )
    }
}