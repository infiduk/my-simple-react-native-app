import React from 'react';
import { Button, Text, View } from 'react-native';

import LogoTitle from '../components/LogoTitle.js';
import TextButton from '../components/TextButton.js';

import ModalScreen from './ModalScreen.js';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
                onPress={navigation.getParam('increaseCount')}
                title='+1'
                color='#824cb9'
            />
        ),
        headerLeft: (
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title='MyModal'
                color='#824cb9'
            />
        ),
    }
};

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({increaseCount: this._increaseCount});
    }

    _increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 25}}>Home Screen</Text>
                <Text style={{fontSize: 25}}>Count: {this.state.count}</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 97,
                        otherParam: 'Send Parameter',
                    })}
                />
            </View>
        );
    }
}

export default HomeScreen;