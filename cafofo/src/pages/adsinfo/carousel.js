import React, { Component } from 'react'
import {
    UncontrolledCarousel
} from 'reactstrap'

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