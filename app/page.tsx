import React from 'react';
import './page.css'; // Asegúrate de que este archivo exista para los estilos

const Page = () => {
  return (
    <div className="portfolio-page">
      {/* SECCIÓN SUPERIOR: ENCABEZADO Y FOTO GRANDE */}
      <header className="hero-section">
        {/* Espacio para la imagen grande de fondo/primer plano */}
        <div className="hero-image-container">
          <img
            src="ruta/a/tu/imagen_grande_angie.jpg" // **REEMPLAZA ESTO** con la ruta de tu imagen
            alt="Angie Casco"
            className="hero-image"
          />
        </div>

        <div className="hero-text-overlay">
          <div className="sun-icon-top"></div> {/* Icono o elemento decorativo (se estilizará con CSS) */}
          <h1>ANGIE CASCO</h1>
          <p className="subtitle">ESTUDIANTE DE CONTADURÍA | VOLUNTARIA APASIONADA POR LA INNOVACIÓN EDUCATIVA</p>
          <a href="#portafolio" className="portfolio-button">PORTAFOLIO PERSONAL</a>
        </div>
      </header>

      {/* SECCIÓN INFERIOR: PERFIL Y DESCRIPCIÓN */}
      <section className="profile-section">
        <div className="profile-left">
          <div className="sun-icon-side"></div> {/* Icono o elemento decorativo */}
          <div className="profile-image-container">
            <img
              src="ruta/a/tu/imagen_perfil_pequeña.jpg" // **REEMPLAZA ESTO** con la ruta de la foto pequeña
              alt="Angie Casco perfil"
              className="profile-image"
            />
          </div>
        </div>

        <div className="profile-right">
          <p className="intro-text">
            Estudiante con formación en contabilidad,
            dominio del inglés y habilidades
            interpersonales.
          </p>
          <p className="detail-text">
            Estudiante de Educación Media en el área de Contaduría, con experiencia en proyectos académicos, liderazgo estudiantil y participación en diversos proyectos tecnológicos junto a jóvenes de mi edad. Me caracterizo por la responsabilidad, la creatividad y la disposición para trabajar en equipo. Interesada en seguir creciendo en los ámbitos administrativo, educativo y tecnológico.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;