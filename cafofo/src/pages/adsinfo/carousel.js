import React, { Component } from 'react'
import {
    UncontrolledCarousel
} from 'reactstrap'

export default class CarouselSlider extends Component {

    render() {

        const photos = [
            {
                src: this.props.img,
                key: '1'
            }
        ]

        return (
            <div>
                {console.log(this.props.img)}
                <UncontrolledCarousel items={photos} />
            </div>
        )
    }
}