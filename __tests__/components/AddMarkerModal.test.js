import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import { TextInput } from 'react-native';

import AddMarkerModal from 'components/AddMarkerModal';

import { addMarker } from 'redux/ducks/markers';
import { toggleModal } from 'redux/ducks/ui';

const mockStore = configureStore([]);

const initialState = {
  ui: {
    modal: false,
    lastCoord: {
      latitude: 1,
      longitude: 1,
    },
    message: '',
  },
  markers: [],
};

describe('Testing Modal to add Marker', () => {
  const store = mockStore(initialState);

  const createWrapper = () => shallow(<AddMarkerModal />, { context: { store } });

  it('connects and renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.prop('modalActive')).toEqual(initialState.ui.modal);
    expect(wrapper.prop('coord')).toEqual(initialState.ui.lastCoord);
    expect(wrapper.dive().prop('visible')).toEqual(initialState.ui.modal);
  });

  it('calls action to add marker', () => {
    const wrapper = createWrapper();

    wrapper.dive().find({ id: 'add' }).simulate('press');

    expect(store.getActions()).toContainEqual(addMarker('', wrapper.prop('coord')));
  });

  it('calls action to close the modal', () => {
    const wrapper = createWrapper();

    wrapper.dive().find({ id: 'close' }).simulate('press');

    expect(store.getActions()).toContainEqual(toggleModal());
  });
});
