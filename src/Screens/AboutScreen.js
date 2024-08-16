import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About us</Text>
      <Text style={styles.paragraph}>
        “Bekar ko aakar” is an organization working towards two social issues: solid waste management and women empowerment. We convert solid waste produced from the households and industries such as shoes, tires, utensils, iron and wood scrap, plastic bottles, old clothes, etc. into decorative items for home, office, garden, hotels, park as well as garbage points (GVP points). We provide training and employment to rural women from nearby villages and empower women through employment opportunities.
      </Text>
      <Image source={require('../Images/aap.jpg')} style={styles.logo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:'center',
    color:'#5D76A9',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color:'black',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 20,
    padding:10,
  },
});

export default AboutScreen;