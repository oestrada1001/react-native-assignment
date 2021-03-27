import React from 'react-native';
import {SafeAreaView, Text, View} from 'react-native';

const AnimationScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>1st page: animate a visible box moving from left to right over 5 seconds. This doesn't have to be fancy and can use any library (React-Native's own library or a 3rd party). The purpose of this is to just see an animation being implemented. The box itself doesn't have to be special either, it can be a blue View container, we will not give a better score if the box itself is prettier.</Text>
            </View>
        </SafeAreaView>
    )
}

export default AnimationScreen;