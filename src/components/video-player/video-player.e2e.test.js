import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<VideoPlayer/> has 2 states: Play and Pause`, () => {
  const film = {
    id: 1,
    name: `Alien`,
    previewImage: `img/alien.jpg`,
    previewVideoLink: `https://movies.com/alien.ogv.360p.webm`
  };

  const componentWrapper = (isPlaying) => {
    return mount(<VideoPlayer film={film} isPlaying={isPlaying}/>);
  };

  expect(componentWrapper(true).state(`isPlaying`)).toBe(true);
  expect(componentWrapper(false).state(`isPlaying`)).toBe(false);
});
