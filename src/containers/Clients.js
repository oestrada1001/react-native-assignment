import React, { Component } from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import DigiList from '../components/DigiList';
import DigiStyle from '../styles/main'

/**
 * Instanticating Object to retrieve data.
 */
import Client from '../data/Client';
const client = new Client();

class ClientsScreen extends Component {


    constructor(){
        super();
        client.log();
        this.state = {
            clients: client.getCurrentView()
        }
    }


    buttonPressed = () => {
        console.log('Pressed');

        let result = client.updateView();

        this.setState({
            clients: result  
        });
        console.log('New Data: ', result);
    }

    render() {
        return (
            <SafeAreaView>

                <Button title="Add to stack" disabled={client.getTotalPages() == client.getCurrentPage() } onPress={this.buttonPressed} />
                <View style={DigiStyle.base}>
                    <DigiList data={this.state.clients} template="client" />
                    <Text>2nd page: render a LARGE set of data from /data/largeDataFromDb.json as a list. Each data object should be represented in a box of its own and should occupy its own row, the styling doesn't matter but as an example, it can be shown as such</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default ClientsScreen