import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { toggleModal } from 'redux/ducks/markers';

import AddMarkerModal from 'components/AddPlaceModal';
import Marker from 'components/Marker';

import styles from './styles';

class Map extends Component {
  static propTypes ={
    toggleModal: PropTypes.func.isRequired,
  }

  test = () => {}

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          onLongPress={() => { this.props.toggleModal(); }}
        >
          <Marker />
        </MapView>
        <AddMarkerModal />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal }, dispatch);

export default connect(null, mapDispatchToProps)(Map);
