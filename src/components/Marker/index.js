import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

export default class Marker extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      login: PropTypes.string,
      bio: PropTypes.string,
      id: PropTypes.number,
      avatar_url: PropTypes.string,
    }).isRequired,
    coord: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  };

  state = {
    renderedImage: false,
  }

  render() {
    const { user, coord } = this.props;
    return (
      <MapView.Marker
        title={user.name || user.login}
        description={user.bio || 'Sem biografia'}
        coordinate={{ ...coord }}
      >
        <View style={styles.marker}>
          <Image
            key={`${user.avatar_url}.${this.state.renderedImage}`}
            onLoad={() => { this.setState({ renderedImage: true }); }}
            style={styles.avatar}
            source={{ uri: user.avatar_url }}
          />
        </View>
      </MapView.Marker>
    );
  }
}
