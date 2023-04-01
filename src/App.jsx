import { Buscador } from './components/Buscador';
import { CrearPeliculas } from './components/CrearPeliculas';
import { Listado } from './components/Listado';

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
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <Listado />
      </section>

      <aside className="lateral">
        <Buscador />
        <CrearPeliculas />
      </aside>

      <footer className="footer">
        &copy; Master en JavaScript ES12 y Typescript
      </footer>
    </div>
  );
};
