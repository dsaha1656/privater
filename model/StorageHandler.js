import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import {AsyncStorage} from 'react-native';

export const getItem = async (key, callback) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      const a =  jsonValue != null ? JSON.parse(jsonValue) : null
      callback(a)
    } catch(e) {
      // read error
    }
}

export const setItem = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch(e) {
      // save error
    }
}