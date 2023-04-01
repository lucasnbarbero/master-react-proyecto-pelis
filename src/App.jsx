export const App = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis pelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">miweb.es</p>
          <button className="edit">Editar</button>
          <button className="delete">Eliminar</button>
        </article>
      </section>

      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <input type="text" />
            <button>Buscar</button>
          </form>
        </div>
        <div className="add">
          <h3 className="title">Añadir pelicula</h3>
          <form>
            <input type="text" placeholder="Titulo" />
            <textarea placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar" />
          </form>
        </div>
      </aside>

      <footer className="footer">
        &copy; Master en JavaScript ES12 y Typescript
      </footer>
    </div>
  );
};
