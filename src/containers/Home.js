import { useNavigation } from '@react-navigation/core';
import React, {Component} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import DigiButton from '../components/DigiButton';
import {Routes} from '../Navigation';

function HomeScreen () {
  const navigation = useNavigation();

  const screenButtons = Routes.map(route => {
    if (route.name !== 'Home') {
      return <DigiButton navigation={navigation} screenName={route.name} title={route.title} />;
    }
  });

  return (
    <SafeAreaView>
      <View>
          {screenButtons}
      </View>
    </SafeAreaView>
  )
}
  
export default HomeScreen;