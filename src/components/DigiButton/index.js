import React from 'react';
import { Alert, Button } from 'react-native';

const DigiButton = ({ navigation, screenName, title }) => {

    return (
        <Button 
            title={title}
            onPress={() => navigation.navigate(screenName)}>
            View 1 Title
        </Button>
    )
}

export default DigiButton;