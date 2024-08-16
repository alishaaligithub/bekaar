import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Bekar Ko Aakar</Text>
      <Image source={require('../Images/BKA.jpg')} style={styles.logo} />
      <Text style={styles.heading}>Our Testimonial</Text>
      <Text style={styles.subheading}>Clients:</Text>
      <Text style={styles.text}>- Nagar Nigam, Jhansi</Text>
      <Text style={styles.text}>- ICAR - Central Agroforestry Research Institute, Jhansi</Text>
      <Text style={styles.text}>- Bundelkhand University, Jhansi</Text>
      <Text style={styles.text}>- Jhansi Govt. Museum</Text>
      <Text style={styles.subheading}>Feedback messages by clients:</Text>
      <Text style={styles.text}>- The selfies and park made from waste material are visually appealing and attractive and also highlight the importance of waste reduction and upcycling in the community</Text>
      <Text style={styles.text}>- Appreciable expertise, passion and commitment to promote sustainable practices and awareness</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:'#5D76A9',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color:'#5D76A9',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color:'black'
  },
});