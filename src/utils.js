export const convertScoreToGrade = (score) => {
  if (score >= 0 && score < 3) {
    return `Bad`;
  } else if (score >= 3 && score < 5) {
    return `Normal`;
  } else if (score >= 5 && score < 8) {
    return `Good`;
  } else if (score >= 8 && score < 10) {
    return `Very good`;
  } else if (score === 10) {
    return `Awesome`;
  }

  return ``;
};

export const MovieCardTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertFilm = (film) => ({
  name: film.name,
  posterImage: film.poster_image,
  previewImage: film.preview_image,
  backgroundImage: film.background_image,
  backgroundColor: film.background_color,
  description: film.description,
  rating: film.rating,
  scoresCount: film.scores_count,
  director: film.director,
  starring: film.starring,
  runTime: film.run_time,
  genre: film.genre,
  released: film.released,
  id: film.id,
  isFavorite: film.is_favorite,
  videoLink: film.video_link,
  previewVideoLink: film.preview_video_link,
});

export const convertMinsToHrsMins = (mins) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
};
