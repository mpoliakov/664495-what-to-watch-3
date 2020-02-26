import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

it(`<VideoPlayer/> is rendered correctly`, () => {
  const film = {
    id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
    title: `Alien`,
    imageUrl: `img/alien.jpg`,
    videoUrl: `https://movies.com/alien.ogv.360p.webm`
  };

  const options = {
    createNodeMock: () => {
      return {};
    }
  };

  const component = renderer.create(<VideoPlayer film={film} isPlaying={true} witdth={280} height={175} muted={true}/>, options).toJSON();
  expect(component).toMatchSnapshot();
});
