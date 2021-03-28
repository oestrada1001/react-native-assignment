import React from 'react';
import {View, Text} from 'react-native';
import ClientItemStyle from './styles';

const ClientItem = ({item}) => {
    return (
        <View style={ClientItemStyle.card}>
            <Text style={ClientItemStyle.item}>ID: {item._id}</Text>
            <Text style={ClientItemStyle.item}>Name: {item.name}</Text>
            <Text style={ClientItemStyle.item}>Phone: {item.phone}</Text>
            <Text style={ClientItemStyle.item}>Email: {item.email}</Text>
        </View>
    )
}

export default ClientItem;