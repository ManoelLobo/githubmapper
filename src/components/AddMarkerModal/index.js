import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { addMarker } from 'redux/ducks/markers';
import { toggleModal } from 'redux/ducks/ui';

import styles from './styles';

class AddMarkerModal extends Component {
  static propTypes ={
    addMarker: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    modalActive: PropTypes.bool.isRequired,
  }

  state = {
    username: '',
  }

  closeModal = () => {
    this.setState({ username: '' });
    this.props.toggleModal();
  }

  render() {
    return (
      <Modal
        transparent
        visible={this.props.modalActive}
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={styles.addMarker}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              placeholder="Usuário no Github"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => { this.closeModal(); }}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={() => {
                    this.props.addMarker(this.state.username);
                    this.closeModal();
                  }
                }
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalActive: state.ui.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addMarker, toggleModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddMarkerModal);
