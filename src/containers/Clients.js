import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const ClientsScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>2nd page: render a LARGE set of data from /data/largeDataFromDb.json as a list. Each data object should be represented in a box of its own and should occupy its own row, the styling doesn't matter but as an example, it can be shown as such</Text>
            </View>
        </SafeAreaView>
    )
}

export default ClientsScreen