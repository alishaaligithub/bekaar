// ContactPage.js
import React from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView } from 'react-native';

const ContactScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Contact Details</Text>
      <Text style={styles.subHeader}> . Address with Google map coordinates</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://maps.app.goo.gl/muW3Zx7MfQuqD39Y6')}>
        Bekar ko aakar - https://maps.app.goo.gl/muW3Zx7MfQuqD39Y6
      </Text>

      <Text style={styles.subHeader}> . Email</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('mailto:bekarkoaakar@gmail.com')}>
        bekarkoaakar@gmail.com
      </Text>
      <Text style={styles.text} onPress={() => Linking.openURL('mailto:kratitva.04@gmail.com')}>
        kratitva.04@gmail.com
      </Text>

      <Text style={styles.subHeader}> . Phone/Mobile</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('tel:8120538564')}>
        8120538564
      </Text>
      <Text style={styles.text} onPress={() => Linking.openURL('tel:8299526152')}>
        8299526152
      </Text>

      <Text style={styles.header}>Social Media Link</Text>
      <Text style={styles.subHeader}> . Facebook</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://www.facebook.com/feel.decor.94/')}>
      https://www.facebook.com/feel.decor.94/
      </Text>
      <Text style={styles.subHeader}> . LinkedIn</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://www.linkedin.com/in/bekar-ko-aakar-a098132bb')}>
      https://www.linkedin.com/in/bekar-ko-aakar-a098132bb
      </Text>
      <Text style={styles.subHeader}> . Instagram</Text>
      <Text style={styles.subHeader}> - Bekar ko Aakar</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://www.instagram.com/bekar_ko_aakar/')}>
      https://www.instagram.com/bekar_ko_aakar/
      </Text>
      <Text style={styles.subHeader}> -  Kratitva</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://www.instagram.com/_kratitva_/')}>
      https://www.instagram.com/_kratitva_/
      </Text>
      <Text style={styles.subHeader}> . Youtube</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://www.youtube.com/@bekarkoaakar')}>
      https://www.youtube.com/@bekarkoaakar
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 8,
    textAlign:'center',
    color:'#5D76A9',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    color:'black',
  },
  text: {
    fontSize: 16,
    color: '#5D76A9',
    marginVertical: 2,
    textDecorationLine:'underline',
  },
  galleryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 16,
  },
});

export default ContactScreen;