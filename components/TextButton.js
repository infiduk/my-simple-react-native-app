import React from 'react';
import { Button } from 'react-native';

import LogoTitle from './LogoTitle.js';

class TextButton extends React.Component {
    render() {
        return {
            headerTitle: <LogoTitle />,
            headerRight: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title='+1'
                    color='#c239df'
                />
            ),
            headerLeft: (
                <Button
                    onPress={navigation.navigate('Second')}
                    title='Second'
                    color='#9d3af3'
                />
            ),
        }
    }
}

export default TextButton;