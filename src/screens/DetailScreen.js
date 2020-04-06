import React from "react";
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';

const DetailScreen = ({ route }) => {
  const { title, 
          artist,
          price,
          url,
          image,
          description
        } = route.params;

  return (
    <ScrollView>
    <Text>222</Text>

  </ScrollView>
  );
}

export default DetailScreen;
