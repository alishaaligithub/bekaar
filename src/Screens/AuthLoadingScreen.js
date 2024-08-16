import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigation]);

  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoadingScreen;