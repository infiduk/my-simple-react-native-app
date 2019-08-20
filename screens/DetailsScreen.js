import React from 'react';
import { Button, Text, View } from 'react-native';

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: '#8acd34',
        },
        headerTintColor: '#fefefe',
    };

    render() {
        const navigation = this.props.navigation;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'Default Value');

        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Details Screen</Text>
                <Text>itemId: {itemId}</Text>
                <Text>otherParam: {otherParam}</Text>
                <Button
                    title='Details in Details'
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })}
                />
                <Button
                    title='Go to Home'
                    onPress={() => this.props.navigation.navigate('Home')} //popToPop
                />
                <Button
                    title='Go Back'
                    onPress={() => this.props.navigation.goBack()} // pop
                />
            </View>
        );
    }
}

export default DetailsScreen;