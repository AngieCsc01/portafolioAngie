import React from 'react';

import './page.css';



// Información de Angie Casco para el contenido

const skills = [

  {

    title: 'Área Académica',

    image: 'imagen_habilidad_1.png', // Reemplazar

    list: [

      'Dominio de técnicas de contabilidad',

      'Manejo de Word, Excel, PowerPoint',

      'Manejo de Canva y diseño de presentaciones',

      'Conocimientos de SEO y desarrollo web',

    ],

  },

  {

    title: 'Área Personal',

    image: 'imagen_habilidad_23.png', // Reemplazar

    list: [

      'Trabajo en equipo',

      'Liderazgo y control',

      'Creatividad e iniciativa',

      'Resolución y planificación',

      'Manejo del inglés oral y escrito',

    ],

  },

  {

    title: 'Área Creativa',

    image: 'imagen_habilidad_3.png', // Reemplazar

    list: [

      'Creación de contenido educativo',

      'Desarrollo de proyectos modernos',

      'Participación en actividades tecnológicas',

    ],

  },

];



const projects = [

    {

        event: 'Hackathon de Innovación Tecnológica',

        year: '2023',

        project: 'PayOf',

        description: 'Aplicación de pagos digitales creada para agilizar transacciones rápidas y seguras. El proyecto integra un diseño intuitivo y funcionalidades centradas en mejorar la experiencia de pago en entornos cotidianos.',

    },

    {

        event: 'Expo de logros 2025',

        year: '2024',

        project: 'DINAtours',

        description: 'Plataforma web enfocada en la promoción del turismo en El Salvador. Incluye información de destinos, recorridos y experiencias, organizada en una interfaz moderna y accesible para usuarios nacionales e internacionales.',

    },

    {

        event: 'ExpoTech Emprendimiento Digital',

        year: '2025',

        project: 'Jambo',

        description: 'Sitio web orientado a conectar trabajadores con experiencia empírica con oportunidades laborales. Presenta perfiles basados en habilidades prácticas y facilita el enlace entre talento y empleadores.',

    }

];



const Page = () => {

  return (

    <div className="portfolio-page">

      {/* 1. HEADER & HERO SECTION (Parte Superior Gradiente) */}

      <header className="hero-section-new">

        <nav className="navbar">

          <div className="logo">Portafolio Angie Casco </div>

          <div className="nav-links">

            <a href="#perfil">Perfil</a>

            <a href="#habilidades">Habilidades</a>

            <a href="#actividad">Actividad</a>

            <a href="#contacto">Contacto</a>

            <button className="cta-button-nav">Mi CV</button>

          </div>

        </nav>



        <div className="hero-content-container">

          <div className="hero-text-area">

            <h1>

              "Desbloquea tu  

              <span className="highlight">Potencial</span>

              <br /> con

              <span className="highlight">Contaduría, Liderazgo y Tecnología</span>"

            </h1>

            <p className="hero-subtitle">

              Estudiante de Contaduría y voluntaria, apasionada por la innovación educativa y la tecnología. Descubre mis proyectos, habilidades y mi contribución al cambio.

            </p>

            <div className="hero-buttons">

              <button className="get-started-btn">Ver Proyectos</button>

              <button className="try-free-btn">Mi Portafolio</button>

            </div>

          </div>



          <div className="hero-image-area">

            {/* Imagen principal de la estudiante */}

            <img src="angie.jpeg" alt="Angie Casco" className="main-hero-image" />

            {/* Elementos flotantes/decorativos */}

            <div className="floating-badge badge-1">100+ Proyectos</div>

            <div className="floating-badge badge-2">100% Innovación</div>

          </div>

        </div>

      </header>



      {/* 2. SECCIÓN DE PERFIL / INTRODUCCIÓN */}

      <section className="profile-intro-section" id="perfil">

        <div className="intro-main-content">

          <div className="intro-image-grid">

            {/* Usando una cuadrícula de imágenes, estilo del diseño de origen */}

            <div className="grid-item item-1">

              <img src="imagen_perfil_pequeña.jpeg" alt="Angie 1" />

            </div>

            <div className="grid-item item-2">

              <img src="imagen_perfil_pequeña.jpeg" alt="Angie 2" />

            </div>

            <div className="grid-item item-3">

              <img src="imagen_perfil_pequeña.jpeg" alt="Angie 3" />

            </div>

            <div className="grid-item item-4">

              <img src="imagen_perfil_pequeña.jpeg" alt="Angie 4" />

            </div>

          </div>



          <div className="intro-text-content">

            <h2>

              <span className="highlight">Perfil</span> de Angie Casco

            </h2>

            <p className="intro-detail-text">

              Estudiante de Educación Media en el área de Contaduría, con experiencia en proyectos académicos, liderazgo estudiantil y participación en diversos proyectos tecnológicos.

            </p>

            <ul>

              <li>

                Formación Técnica:Dominio de contabilidad y herramientas de oficina.

              </li>

              <li>

                Habilidades Clave:Liderazgo, creatividad, responsabilidad y trabajo en equipo.

              </li>

              <li>

                Intereses:Crecimiento en los ámbitos administrativo, educativo y tecnológico.

              </li>

              <li>

                Dominio de Idiomas:Inglés oral y escrito.

              </li>

            </ul>

          </div>

        </div>

      </section>



      {/* 3. SECCIÓN DE HABILIDADES (Popular Courses) */}

      <section className="popular-courses-section" id="habilidades">

        <h2 className="section-title-dark">⭐ Mis Habilidades Destacadas ⭐</h2>

        <div className="course-cards-container">

          {skills.map((skill, index) => (

            // Añado clase "expandable-card" para la nueva funcionalidad

            <div key={index} className="course-card expandable-card">

              <div className="card-image-container">

                <img src={skill.image} alt={skill.title} />

              </div>

              <div className="card-content">

                <h3>{skill.title}</h3>

                {/* Lista visible en hover */}

                <div className="skill-list-container">

                  <ul>

                    {skill.list.map((item, i) => (

                      <li key={i}>{item}</li>

                    ))}

                  </ul>

                </div>

                <div className="card-footer">

                  <span className="course-hours">{skill.list.length} Habilidades</span>

                  <button className="course-button">Ver Más</button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* 4. SECCIÓN DE ACTIVIDAD (Experiencia y Logros) */}

      <section className="activity-section-new" id="actividad">

        <div className="activity-container">

          <div className="activity-text-area">

            <p className="activity-pretitle">Experiencia y Logros</p>

            <h2>

              <span className="highlight">Actividad Personal</span>

            </h2>

           

            {/* Actividades de Voluntariado */}

            <div className="activity-item">

              <h4>Voluntaria en Glasswwing International</h4>

              <p className="activity-dates-new">Noviembre 2024 - Diciembre 2025</p>

              <p className="activity-description-new">

                Apoyo en actividades educativas y sociales dentro del programa de mentoría uno a uno, promoviendo valores y habilidades para la vida.

              </p>

            </div>

            <div className="activity-item">

              <h4>Participante en Ferias Tecnológicas Escolares</h4>

              <p className="activity-dates-new">Años: 2023 - 2025</p>

              <p className="activity-description-new">

                Fui parte de proyectos de innovación como páginas web, presentaciones interactivas y exposiciones grupales.

              </p>

            </div>



            {/* Proyectos Destacados */}

            <h3 className="projects-subtitle">Proyectos de Desarrollo y Tecnología</h3>

            {projects.map((project, index) => (

                <div key={index} className="activity-item project-item">

                    <h4>{`${project.year} – ${project.event}`}</h4>

                    <p className="activity-dates-new">Proyecto: {project.project}</p>

                    <p className="activity-description-new">{project.description}</p>

                </div>

            ))}



            <button className="activity-button">Ver Mi CV Completo</button>

          </div>

          <div className="activity-image-area">

            <img src="imagen_contacto_final.png" alt="Actividad Personal" className="activity-side-image" />

            <div className="activity-badge-float">100+ Horas de Voluntariado</div>

          </div>

        </div>

      </section>



      {/* 5. SECCIÓN DE CONTACTO (Pie de página simplificado) */}

      <footer className="footer-section" id="contacto">

        <div className="footer-content">

          <div className="footer-logo">Angie Casco</div>

          <div className="footer-links">

            <span className="footer-contact-text">

                LinkedIn: Angie Casco

            </span>

            <span className="footer-contact-text">

                Correo Personal: angiecasco095@mail.com

            </span>

          </div>

          <div className="footer-social">

            {/* Íconos sociales o de contacto (ej: Email, LinkedIn) */}

            <span>📧</span>

            <span>🔗</span>

          </div>

        </div>

        <div className="footer-bottom">

          <p>© 2025 Portafolio Personal Angie Casco. Todos los derechos reservados.</p>

        </div>

      </footer>

    </div>

  );

};



export default Page; 