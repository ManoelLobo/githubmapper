import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { toggleModal, setCoord } from 'redux/ducks/ui';

import AddMarkerModal from 'components/AddMarkerModal';
import Marker from 'components/Marker';

import styles from './styles';

class Map extends Component {
  static propTypes ={
    toggleModal: PropTypes.func.isRequired,
    setCoord: PropTypes.func.isRequired,
  }

  openModal = (coord) => {
    this.props.setCoord(coord);
    this.props.toggleModal();
  }

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
          onLongPress={(event) => { this.openModal(event.nativeEvent.coordinate); }}
        >
          <Marker />
        </MapView>
        <AddMarkerModal />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.markers,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal, setCoord }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
