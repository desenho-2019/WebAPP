import React from 'react';
import Button from '../../components/common/button'

const fb = require('../../assets/fb.png');



class ButtonFactory {
    static factoryMethod(data, props) {
        switch (data) {
            case 'facebook':
                return <Button 
                    color={'#fff'}
                    icon={fb}

                />
        }
    }
}

export default (ButtonFactory);