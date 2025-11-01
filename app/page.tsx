import React from 'react';
import './page.css'; // Asegúrate de que este archivo exista para los estilos

const Page = () => {
  return (
    <div className="portfolio-page">
      {/* SECCIÓN SUPERIOR: ENCABEZADO Y FOTO GRANDE (Parte 1) */}
      <header className="hero-section">
        {/* Espacio para la imagen grande de fondo/primer plano */}
        <div className="hero-image-container">
          <img
            src="ruta/a/tu/imagen_grande_angie.jpg" // Agregar luego
            alt="Angie Casco"
            className="hero-image"
          />
        </div>

        <div className="hero-text-overlay">
          <div className="sun-icon-top"></div>
          <h1>ANGIE CASCO</h1>
          <p className="subtitle">ESTUDIANTE DE CONTADURÍA | VOLUNTARIA APASIONADA POR LA INNOVACIÓN EDUCATIVA</p>
          <a href="#portafolio" className="portfolio-button">PORTAFOLIO PERSONAL</a>
        </div>
      </header>

      {/* SECCIÓN INFERIOR: PERFIL Y DESCRIPCIÓN (Parte 1) */}
      <section className="profile-section">
        <div className="profile-left">
          <div className="sun-icon-side"></div>
          <div className="profile-image-container">
            <img
              src="ruta/a/tu/imagen_perfil_pequeña.jpg" // Agregar luego
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

      {/* ----------------------------------------------------------- */}
      {/* NUEVA SECCIÓN: MIS HABILIDADES (Parte 2) */}
      <section className="skills-section">
        <h2 className="section-title-light">
          <span className="star-icon">★</span> Mis habilidades <span className="star-icon">★</span>
        </h2>
        <div className="skills-grid">
          {/* Columna 1 */}
          <div className="skill-column">
            <div className="skill-image-container">
              <img src="ruta/a/tu/imagen_habilidad_1.jpg" alt="Área académica" className="skill-image" /> {/* Agregar luego */}
            </div>
            <h3>Área académica</h3>
            <ul>
              <li>Dominio de técnicas de contabilidad</li>
              <li>Manejo de Word, Excel, PowerPoint</li>
              <li>Manejo de Canva y diseño de presentaciones</li>
              <li>Conocimientos de SEO y desarrollo web</li>
            </ul>
          </div>
          {/* Columna 2 */}
          <div className="skill-column">
            <div className="skill-image-container">
              <img src="ruta/a/tu/imagen_habilidad_2.jpg" alt="Área personal" className="skill-image" /> {/* Agregar luego */}
            </div>
            <h3>Área personal</h3>
            <ul>
              <li>Trabajo en equipo</li>
              <li>Liderazgo y control</li>
              <li>Creatividad e iniciativa</li>
              <li>Resolución y planificación</li>
              <li>Manejo del inglés oral y escrito</li>
            </ul>
          </div>
          {/* Columna 3 */}
          <div className="skill-column">
            <div className="skill-image-container">
              <img src="ruta/a/tu/imagen_habilidad_3.jpg" alt="Área creativa" className="skill-image" /> {/* Agregar luego*/}
            </div>
            <h3>Área creativa</h3>
            <ul>
              <li>Creación de contenido educativo</li>
              <li>Desarrollo de proyectos modernos</li>
              <li>Participación en actividades tecnológicas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* NUEVA SECCIÓN: ACTIVIDAD PERSONAL (Parte 2) */}
      <section className="activity-section">
        <div className="activity-left">
          <div className="activity-sun-icon"></div>
          <h2>Actividad personal</h2>
        </div>
        <div className="activity-right">
          <h4>Voluntaria en Glowwing International</h4>
          <p className="activity-dates">Años: Noviembre 2024 - Diciembre 2025</p>
          <p className="activity-description">Apoyo en actividades educativas y sociales dentro del programa de mentoría uno a uno, promoviendo valores y habilidades para la vida.</p>

          <h4>Participante en Ferias Tecnológicas Escolares</h4>
          <p className="activity-dates">Años: 2023 - 2025</p>
          <p className="activity-description">Fui parte de proyectos de innovación como páginas web, presentaciones interactivas y exposiciones grupales.</p>

          <h4>Representación en actividades escolares</h4>
          <p className="activity-dates">Participación activa en exposiciones, debates, ferias de logros y dinámicas educativas.</p>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* NUEVA SECCIÓN: CONTACTAME (Parte 2) */}
      <section className="contact-section">
        <h2 className="section-title-light">Contactame</h2>
        <div className="contact-content">
          <div className="contact-image-container">
            <img
              src="ruta/a/tu/imagen_contacto_final.jpg" // Agregar luego
              alt="Angie Casco en contacto"
              className="contact-image"
            />
          </div>
          <div className="contact-links">
            <div className="contact-item">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/angiecascoeducacion</p>
            </div>
            <div className="contact-item">
              <h4>Correo profesional</h4>
              <p>angiecasco.contabilidad.educacion@org.co</p>
            </div>
            <div className="contact-item">
              <h4>Correo personal</h4>
              <p>angiecasco.proyectos@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;