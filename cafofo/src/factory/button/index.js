import React from 'react';
import Button from '../../components/common/button'

const fb = require('../../assets/fb.png');
const email = require('../../assets/mail.png');
const google = require('../../assets/google.png')



class ButtonFactory {
    static factoryMethod(data, props) {
        switch (data) {
            case 'facebook':
                return <Button
                    icon={fb}
                    text={"Entrar com Facebook"}
                    backColor={'#3b5998'}
                    type={"submit"}
                />
            case 'email':
                return <Button
                    icon={email}
                    text={"Entrar com email"}
                    backColor={'#fa6900'}
                    type={"submit"}
                />
            case 'google':
                return <Button
                    icon={google}
                    text={"Entrar com Google"}
                    backColor={'red'}
                    type={"submit"}

                />
            default:
                return <Button
                    text={"Erro"}
                />
        }
    }
}

export default (ButtonFactory);