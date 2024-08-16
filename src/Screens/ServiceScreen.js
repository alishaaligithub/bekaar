import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Services</Text>

      <Text style={styles.subheading}>City beautification by waste materials</Text>
      <Text style={styles.paragraph}>
      At “Bekar ko Akaar” we are passionate about sustainable solutions. Our proposed initiative aims to repurpose solid waste material, turning them into artistic installation that not only beautify the city but also promote environmental awareness.
We create attractive and selfie points, public parks, benches etc. with waste materials. 
      </Text>
      <Text style={styles.subheading}>   Training and workshops   </Text>
      <Text style={styles.paragraph}>
      We have been continuously visiting/invited to various schools, colleges and universities to spread awareness about solid waste management amongst the children and students. Also, we have been working towards women empowerment.
      </Text>
      <Text style={styles.subheading}>Handicraft Products</Text>
      <Text style={styles.paragraph}>
      We also sell handicraft and traditional products under the collection named ‘’KRATITVA’’. Our handicraft products showcase the cultural creativity offering unique and personalized items. 
In addition to the aesthetic appeal, our handicraft products often support local economies and artisans, contributing to sustainable development and preserving cultural traditions. 

      </Text>
      <Text style={styles.subheading}>Home decor and lifestyle products </Text>
      <Text style={styles.paragraph}>
      We offer wide range of handicraft items use to enhance the aesthetic appeal and functionality of living spaces. 

      </Text>
      <Text style={styles.subheading}>Corporate gifts </Text>
      <Text style={styles.paragraph}>
      Our corporate gifts range from practical and functional items to customized gifts, which serve various purposes including expressing gratitude, celebrating achievements, commemorating milestones etc.

      </Text>
      <Text style={styles.subheading}> Consultancy</Text>
      <Text style={styles.paragraph}>
      We provide guidance, advice as well as execution to businesses, government agencies etc.
      </Text>

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
    margin: 8,
    textAlign:'center',
    color:'#5D76A9',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color:'grey',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 20,
    padding:10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color:'black',
    textAlign:'center'
  },
});

export default AboutScreen;