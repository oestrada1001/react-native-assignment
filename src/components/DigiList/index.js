import React from 'react';
import {FlatList, Text, View} from 'react-native';

import ClientItem from '../ClientItem';

const DigiList = ({data, template}) => {

    /**
     * Check template if this gets more complicated
     * implement better solution.
     */
    switch(template) {
        case 'client': 
            template = ClientItem;
            break;
        default:
            template = ClientItem;
    }
    
    return (
        <View>
            <FlatList data={data} renderItem={template} keyExtractor={(item) => item._id} />
        </View>
    )
}

export default DigiList;