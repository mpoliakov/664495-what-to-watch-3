import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`<VideoPlayer/> has 2 states: Play and Pause`, () => {
  const film = {
    id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
    title: `Alien`,
    imageUrl: `img/alien.jpg`,
    videoUrl: `https://movies.com/alien.ogv.360p.webm`
  };

  const componentWrapper = (isPlaying) => {
    return mount(<VideoPlayer film={film} isPlaying={isPlaying}/>);
  };

  expect(componentWrapper(true).state(`isPlaying`)).toBe(true);
  expect(componentWrapper(false).state(`isPlaying`)).toBe(false);
});
