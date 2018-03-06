import React from 'react';
import { shallow } from 'enzyme';

import { Image } from 'react-native';
import Marker from 'components/Marker';

import MapView from 'react-native-maps';

const user = {
  name: 'PropTypes.string',
  login: 'PropTypes.string',
  bio: 'PropTypes.string',
  id: 1,
  avatar_url: 'PropTypes.string',
};

const coord = {
  latitude: 1,
  longitude: 1,
};

describe('Testing Marker component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Marker user={user} coord={coord} />);

    expect(wrapper.find(MapView.Marker)).toHaveLength(1);
  });

  it('renders correctly using login instead of name', () => {
    const userWithNoName = { ...user, name: null };

    const wrapper = shallow(<Marker user={userWithNoName} coord={coord} />);

    expect(wrapper.find(MapView.Marker)).toHaveLength(1);
  });

  it('renders correctly without bio', () => {
    const userWithoutPast = { ...user, bio: null };

    const wrapper = shallow(<Marker user={userWithoutPast} coord={coord} />);

    expect(wrapper.find(MapView.Marker)).toHaveLength(1);
  });

  it('registers that image has loaded', () => {
    const wrapper = shallow(<Marker user={user} coord={coord} />);

    wrapper.find(Image).simulate('load');

    expect(wrapper.state('renderedImage')).toBe(true);
  });
});
