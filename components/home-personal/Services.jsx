import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Lo que mejor hacemos</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Servicios <span className="fw-200">Destacados.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Desarrollo de Software</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">UI/UX</span>
                  <span className="tag">Backend / Frontend</span>
                  <span className="tag">APIs / Integraciones</span>
                  <span className="tag">Bases de Datos</span>

                </div>
                  <p>
                  Desarrollamos software a la medida, escalable y confiable, pensado para adaptarse a tus procesos y crecer contigo desde el primer día.              
                  </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Estrategia de marca</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Identidad visual</span>
                  <span className="tag">Diseño de marca</span>
                  <span className="tag">Estrategia de marca</span>
                  <span className="tag">Logotipos</span>
                  <span className="tag">Papelería corporativa</span>
                </div>
                <p>
                  Creamos marcas con identidad sólida y coherente, desde el logotipo hasta la presencia física en eventos y exposiciones.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Marketing</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Redes sociales</span>
                  <span className="tag">Contenido visual</span>
                  <span className="tag">Campañas publicitarias</span>
                  <span className="tag">Posicionamiento de marca</span>
                </div>
                <p>
                  Creamos estrategias de marketing enfocadas en resultados, alineadas con tus objetivos y pensadas para conectar con tu audiencia de forma auténtica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
