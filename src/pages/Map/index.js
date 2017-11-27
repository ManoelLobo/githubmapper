import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, View } from 'react-native';
import MapView from 'react-native-maps';
import { toggleModal, setCoord, setMessage } from 'redux/ducks/ui';

import AddMarkerModal from 'components/AddMarkerModal';
import Marker from 'components/Marker';

import styles from './styles';

class Map extends Component {
  static propTypes ={
    toggleModal: PropTypes.func.isRequired,
    setCoord: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
  }

  componentDidUpdate() {
    if (this.props.message.length) this.showMessage(this.props.message);
  }

  openModal = (coord) => {
    this.props.setCoord(coord);
    this.props.toggleModal();
  }

  showMessage = async (message) => {
    await Alert.alert(message);
    this.props.setMessage('');
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
  message: state.ui.message,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleModal,
  setCoord,
  setMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
