import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

it(`<VideoPlayer/> is rendered correctly`, () => {
  const film = {
    id: 1,
    name: `Alien`,
    previewImage: `img/alien.jpg`,
    previewVideoLink: `https://movies.com/alien.ogv.360p.webm`
  };

  const options = {
    createNodeMock: () => {
      return {};
    }
  };

  const component = renderer.create(<VideoPlayer film={film} isPlaying={true} witdth={280} height={175} muted={true}/>, options).toJSON();
  expect(component).toMatchSnapshot();
});
