import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('matches the Character snapshot', () => {
    const wrapper = shallow(<Character name='Arnook' image='https://vignette.wikia.nocookie.net/avatar/images/0/0c/Chief.png/revision/latest?cb=20140122221730' affiliation='Northern Water Tribe' />);
    expect(wrapper).toMatchSnapshot();
  });
});

