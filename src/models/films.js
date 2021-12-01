export class FilmsModel {
  constructor() {
    this._films = [];
  }

  getFilms() {
    return this._films;
  }

  setFilms(films) {
    this._films = Array.from(films);
  }

  updateFilm(id, film) {
    const index = this._films.findIndex((film) => film.id === id);

    if (index === -1) return;

    this._films = [].concat(this._films.slice(0, index), film, this._films.slice(index + 1));

    return true;
  }
}