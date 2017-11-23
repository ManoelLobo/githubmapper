import React from 'react';
import { Image, View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const Marker = () => (
  <MapView.Marker
    title="Teste"
    description="Este é um teste"
    coordinate={{
      latitude: -27.2177659,
      longitude: -49.6451598,
    }}
  >
    <View style={styles.marker}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://avatars0.githubusercontent.com/u/8916632?v=4' }}
      />
    </View>
  </MapView.Marker>
);

export default Marker;
