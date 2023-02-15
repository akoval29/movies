'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOfFilms.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = +prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true
    }
  },
  // writeYourGenres: function () {
  //   for (let i = 1; i <= 3; i++) {
  //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);

  //     if (genre == '' || genre == null) {
  //       console.log(`Некоректні дані, або дані відсутні`);
  //       i--
  //     } else {
  //       personalMovieDB.genres[i - 1] = genre;
  //     }

  //     personalMovieDB.genres.forEach((item, i) => {
  //       console.log(`Улюблений жанр ${i + 1} - це ${item}`);
  //     })
  //   }
  // }

  //  -----------------  Інший підхід   ----------------
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genre = prompt(`Введіть ваші улюблені жанри через кому`).toLowerCase();

      if (genre == '' || genre == null) {
        console.log(`Некоректні дані, або дані відсутні`);
        i--
      } else {
        personalMovieDB.genres = genre.split(',');
        personalMovieDB.genres.sort();
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Улюблений жанр ${i + 1} - це ${item}`);
      })
    }
  }
};