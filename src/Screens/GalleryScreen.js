import React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';

export default function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
         <Text style={styles.heading}>Gallery</Text>
         <Text style={styles.subheading}>Product Portfolio</Text>
         <Image source={require('../Images/i1.jpg')} style={styles.logo} />
         <Text style={styles.paragraph}>
         RAI NRITYA WALL PAINTING- A well﻿known traditional dance from BUNDELKHAND.
Unique and beautiful, designed﻿decorative item for home decor/office/living room wall hanging handmade painting by professional artist.﻿
﻿
      </Text>
      <Image source={require('../Images/i2.jpg')} style={styles.logo} />
         <Text style={styles.paragraph}>
         HANDMADE CHITERI PAINTING-Chiteri art, the traditional folk art of Bundelkhand
      </Text>
      <Image source={require('../Images/i3.jpg')} style={styles.logo} />
         <Text style={styles.paragraph}>
         TYRE SITTING CHAIR WITH TABLE-Handmade, modern style and unique seating furniture comes  with cushioned  seat and dispenses great posture and overly comfortable  feel to the body      </Text>
         <Image source={require('../Images/i4.jpg')} style={styles.logo} />
         <Text style={styles.paragraph}>
         DRUMBENCH-outdoor furniture with a sturdy construction,very durable. Relax in comfort and style with iconic table  </Text>  
         <Text style={styles.subheading}>Products</Text>
         <Image source={require('../Images/i5.jpg')} style={styles.logo} />
         <Text style={styles.subheading}>Park and Selfie Points
         </Text>
         <Image source={require('../Images/i6.jpg')} style={styles.logo} />
         <Image source={require('../Images/i7.jpg')} style={styles.logo} />
         <Image source={require('../Images/i8.jpg')} style={styles.logo} />
         <Image source={require('../Images/ii9.jpg')} style={styles.logo} />
         <Text style={styles.subheading}>Events and Workshops</Text>
         <Image source={require('../Images/i10.jpg')} style={styles.logo} />
         <Image source={require('../Images/i12.jpg')} style={styles.logo} />
         <Text style={styles.subheading}>Kratitva Collection</Text>   
         <Image source={require('../Images/i11.jpg')} style={styles.logo} />  
         <Image source={require('../Images/i13.jpg')} style={styles.logo} />
         <Image source={require('../Images/i14.jpg')} style={styles.logo} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color:'black',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color:'black',
  },
  logo: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    margin: 20,
    padding:10,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 8,
    textAlign:'center',
    color:'#5D76A9',
  },
});