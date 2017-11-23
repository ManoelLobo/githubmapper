import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { toggleModal } from 'redux/ducks/markers';

import styles from './styles';

class AddMarkerModal extends Component {
  render() {
    return (
      <Modal
        transparent
        visible={this.props.modalActive}
        onRequestClose={() => {}}
      >
        <View style={styles.addPlaceContainer}>
          <TouchableOpacity onPress={() => { this.props.toggleModal() }}>
            <Text>MODAL</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalActive: state.markers.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddMarkerModal);
