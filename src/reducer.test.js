import {reducer, ActionCreator, ActionType} from './reducer';

const films = [
  {
    id: `b47f3158-76c2-4f9b-b511-35419259ce63`,
    title: `The Grand Budapest Hotel`,
    imageUrl: `img/bg-the-grand-budapest-hotel.jpg`,
    posterUrl: `img/the-grand-budapest-hotel-poster.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    description: `<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
              Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
            <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
              sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
              Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>`,
    runTime: `1h 39m`,
    meta: {
      genre: `Drama`,
      releaseYear: 2015,
    },
    rating: {
      score: 8.5,
      count: 120,
    },
  },
  {
    id: `fe2f95b4-22ba-4b5d-b3f5-7fb50bb230bb`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    imageUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Fantasy`,
    },
  },
  {
    id: `0bcb460d-4fa6-466d-8c60-42dd66ec5863`,
    title: `Bohemian Rhapsody`,
    imageUrl: `img/bohemian-rhapsody.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `28973f3e-e22d-43a3-8acc-ae8465becf49`,
    title: `Macbeth`,
    imageUrl: `img/macbeth.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `85e1492b-05c9-4395-90c2-2fdb57c4e2f6`,
    title: `Aviator`,
    imageUrl: `img/aviator.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `efec5ddf-ea07-49f7-a234-36f2beb9a214`,
    title: `We need to talk about Kevin`,
    imageUrl: `img/we-need-to-talk-about-kevin.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `4e92fee6-601c-474a-bc73-0415278d826b`,
    title: `What We Do in the Shadows`,
    imageUrl: `img/what-we-do-in-the-shadows.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Comedy`,
    },
  },
  {
    id: `04744d16-8586-4aa6-8790-93a8c7e3e286`,
    title: `Revenant`,
    imageUrl: `img/revenant.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Sci-Fi`,
    },
  },
  {
    id: `bcb98115-ac9e-46c1-954d-30fd8dbd83db`,
    title: `Johnny English`,
    imageUrl: `img/johnny-english.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Comedy`,
    },
  },
  {
    id: `9b3bc441-9f00-491f-a273-1267622a19e0`,
    title: `Shutter Island`,
    imageUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `4b345e12-4feb-4555-9cf7-9e3ba8d9dd67`,
    title: `Pulp Fiction`,
    imageUrl: `img/bohemian-rhapsody.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Thriller`,
    },
  },
  {
    id: `2cf5e722-3436-4966-80d1-89e8682335fc`,
    title: `No Country for Old Men`,
    imageUrl: `img/what-we-do-in-the-shadows.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `adb210fe-4826-42d9-b79e-903499ee2f14`,
    title: `Snatch`,
    imageUrl: `img/aviator.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Action`,
    },
  },
  {
    id: `46ebfce3-7c95-4fb8-84ef-6e5ce0c2e34e`,
    title: `Moonrise Kingdom`,
    imageUrl: `img/bohemian-rhapsody.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Comedy`,
    },
  },
  {
    id: `5ec72a3b-1591-4f25-857a-0ecc0cebe87e`,
    title: `Seven Years in Tibet`,
    imageUrl: `img/johnny-english.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `8404eecf-c3c5-4cbf-93f6-4f609f760986`,
    title: `Midnight Special`,
    imageUrl: `img/aviator.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `2db47f90-d1a9-4253-be7a-8acf6d4fa3ea`,
    title: `War of the Worlds`,
    imageUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Sci-Fi`,
    },
  },
  {
    id: `b47f3158-76c2-4f9b-b511-19347259ce51`,
    title: `Dardjeeling Limited`,
    imageUrl: `img/johnny-english.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Comedy`,
    },
  },
  {
    id: `7c8b88b2-091b-4cd1-9589-3c88b77a9104`,
    title: `Orlando`,
    imageUrl: `img/revenant.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Drama`,
    },
  },
  {
    id: `018a1a1e-8755-4c4f-87fd-08df55da6771`,
    title: `Mindhunter`,
    imageUrl: `img/aviator.jpg`,
    videoUrl: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    meta: {
      genre: `Sci-Fi`,
    },
  },
  {
    id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
    title: `Midnight Special`,
    imageUrl: `img/what-we-do-in-the-shadows.jpg`,
    videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    meta: {
      genre: `Comedy`,
    },
  },
];

const reviews = [
  {
    id: `2fc32fa3-e5d4-4e7d-8f58-397cc8c9bba7`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: 8.9,
    filmId: `b47f3158-76c2-4f9b-b511-35419259ce63`
  },
  {
    id: `2db47f90-d1a9-4253-be7a-8acf6d4fa3ea`,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `2015-11-18`,
    rating: 8.0,
    filmId: `b47f3158-76c2-4f9b-b511-35419259ce63`
  },
  {
    id: `adb210fe-4826-42d9-b79e-903499ee2f14`,
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    author: `Amanda Greever`,
    date: `2015-11-18`,
    rating: 7.5,
    filmId: `b47f3158-76c2-4f9b-b511-35419259ce63`
  },
  {
    id: `bcb98115-ac9e-46c1-954d-30fd8dbd83db`,
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    author: `Matthew Lickona`,
    date: `2016-12-20`,
    rating: 9.3,
    filmId: `b47f3158-76c2-4f9b-b511-35419259ce63`
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films,
    reviews,
    promoFilm: films[0],
    genreFilter: ``,
    filteredFilms: films.slice(1)
  });
});

it(`Reducer should change genre to selected filter`, () => {
  expect(reducer({
    genreFilter: ``
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Sci-Fi`
  })).toEqual({
    genreFilter: `Sci-Fi`
  });

  expect(reducer({
    genreFilter: `Sci-Fi`
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: `Drama`
  })).toEqual({
    genreFilter: `Drama`
  });

  expect(reducer({
    genreFilter: `Drama`
  }, {
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: ``
  })).toEqual({
    genreFilter: ``
  });
});

it(`Reducer should set filtered films`, () => {
  expect(reducer({
    filteredFilms: []
  }, {
    type: ActionType.GET_FILTERED_FILMS,
    payload: films
  })).toEqual({
    filteredFilms: films
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre filter change returns correct action`, () => {
    expect(ActionCreator.changeGenreFilter(`Horror`)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Horror`,
    });
  });

  it(`Action creator for filtered films returns correct action`, () => {
    const mockedFilms = [
      {
        id: `b47f3158-76c2-4f9b-b511-35419259ce63`,
        title: `The Grand Budapest Hotel`,
        meta: {
          genre: `Drama`
        }
      },
      {
        id: `fe2f95b4-22ba-4b5d-b3f5-7fb50bb230bb`,
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        meta: {
          genre: `Fantasy`,
        }
      },
      {
        id: `0bcb460d-4fa6-466d-8c60-42dd66ec5863`,
        title: `Bohemian Rhapsody`,
        meta: {
          genre: `Drama`,
        }
      }
    ];

    const getState = () => ({
      genreFilter: `Drama`,
      promoFilm: mockedFilms[0],
      films: mockedFilms
    });

    const dispatch = jest.fn();

    ActionCreator.getFilteredFilms()(dispatch, getState);

    expect(dispatch).toBeCalledWith({
      type: ActionType.GET_FILTERED_FILMS,
      payload: [{
        id: `0bcb460d-4fa6-466d-8c60-42dd66ec5863`,
        title: `Bohemian Rhapsody`,
        meta: {
          genre: `Drama`,
        }
      }]
    });
  });
});
