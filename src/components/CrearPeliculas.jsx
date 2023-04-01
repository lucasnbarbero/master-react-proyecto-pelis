import React, { useState } from 'react';

export const CrearPeliculas = () => {
  const titleComponent = 'Añadir pelicula';

  const [peli, setPeli] = useState({ id: '', title: '', description: '' });

  const { description, title } = peli;

  const getFormValues = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let film = { id: new Date().getTime(), title, description };
    setPeli(film);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>{description && title && `Has creado: ${title}`}</strong>
      <form onSubmit={getFormValues}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
